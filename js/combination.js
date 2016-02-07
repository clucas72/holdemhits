/**
 * Javascript port of this .NET combination example https://msdn.microsoft.com/en-us/library/aa289166%28v=vs.71%29.aspx
 *
 * Immediately invoked anonymous function to setup our Combination library
 *
 * Used to pick cards based on scenario indices, so given an index we can duplicate the same setup
 */
( function ( global )
{ 
  /**
   * Inits the combination class with:
   * n - the number of elements to choose from
   * k - the number of items to choose
   */
  var Combination = function ( n, k ) 
  {
    return new Combination.init ( n, k );
  }

  // Object literal for Hits which includes methods for the library
  Combination.prototype = 
  {
    // number of items to pick from
    n: null,

    // number of items to pick
    k: null,

    // the listing of items
    data: null,

    choose: function ( n, k )
    {
      if ( n < 0 || k < 0 )
      {
        throw "Invalid negative parameter in Choose ()";
      }

      if ( n < k )
      {
        return 0;  // special case
      }
      if (n == k)
      {
        return 1;
      }

      var delta;
      var iMax;

      if ( k < n - k ) // ex: Choose(100,3)
      {
        delta = n - k;
        iMax = k;
      }
      else         // ex: Choose(100,97)
      {
        delta = k;
        iMax = n - k;
      }

      var ans = delta + 1;

      for (var i = 2; i <= iMax; ++i)
      {
        ans = (ans * (delta + i)) / i;
      }

      return ans;
    },

    /**
     * Return the mth combination adjusting for any excluded values
     */
    element: function ( m, exclude ) 
    {
      var ans = [];

      var a = this.n;
      var b = this.k;
      var x = ( this.choose ( this.n, this.k ) - 1 ) - m; // x is the "dual" of m
 
      for ( var i = 0; i < this.k; ++i )
      {
        ans[i] = this.largestV ( a, b, x ); // largest value v, where v < a and vCb < x    
        x = x - this.choose ( ans [ i ], b );
        a = ans [ i ];
        b = b - 1;
      }

      for ( var i = 0; i < this.k; ++i )
      {
        ans [ i ] = ( this.n - 1 ) - ans [ i ];
      }

      if ( exclude )
      {
        for ( var i = 0; i < ans.length; i ++ )
        {
          var answer = ans [ i ];

          for ( var k = 0; k < exclude.length; k ++ )
          {
            if ( exclude [ k ] <= answer )
            {
              answer ++;
            }
          }

          ans [ i ] = answer;
        }
      }

      return ans;
    },

    /**
     * return largest value v where v < a and  Choose(v,b) <= x
     */
    largestV: function ( a, b, x )
    {
      var v = a - 1;
           
      while ( this.choose ( v, b ) > x )
      {
        --v;
      }

      return v;
    }
  };

  // Init function
  Combination.init = function ( n, k )
  {
    var self = this;

    if ( n < 0 || k < 0 ) // normally n >= k
    {
      throw "Negative n or k in Combination constructor function";
    }

    this.n = n;
    this.k = k;
    this.data = [];

    for ( var i = 0; i < k; i ++ )
    {
      this.data [ i ] = i;
    }
  }

  Combination.init.prototype = Combination.prototype;

  global.Combination = Combination;

} ( window ) );