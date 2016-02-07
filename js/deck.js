/**
 * DECK
 * Immediately invoked anonymous function to setup our Deck
 */
( function ( global )
{
	var SUIT_NAMES = [ "Hearts", "Clubs", "Diamonds", "Spades" ];

	var ORDINAL_NAMES = [ "Ace", "Two", "Three", "Four", "Five", 
						  "Six", "Seven", "Eight", "Nine", "Ten", 
						  "Jack", "Queen", "King" ];

	var Deck = function() 
	{
		return new Deck.init();
	}

	// Object literal for a deck which includes methods for the deck of cards
	Deck.prototype = 
	{
		// Deck of card insances array
		cards: [],

		// Array of the 169 ranked starting hands in hold'em
		rankedStartingHands: [],
	
		/**
		 * Suit constants
		 */
		HEARTS: 0,
		CLUBS: 1,
		DIAMONDS: 2,
		SPADES: 3,

		/**
		 * Ordinal constants
		 */
		ACE: 0,
		TWO: 1,
		THREE: 2,
		FOUR: 3,
		FIVE: 4,
		SIX: 5,
		SEVEN: 6,
		EIGHT: 7,
		NINE: 8,
		TEN: 9,
		JACK: 10,
		QUEEN: 11,
		KING: 12,

		/**
		 * Specific card index constants
		 */
		ACE_HEARTS: 0,
		TWO_HEARTS: 1,
		THREE_HEARTS: 2,
		FOUR_HEARTS: 3,
		FIVE_HEARTS: 4,
		SIX_HEARTS: 5,
		SEVEN_HEARTS: 6,
		EIGHT_HEARTS: 7,
		NINE_HEARTS: 8,
		TEN_HEARTS: 9,
		JACK_HEARTS: 10,
		QUEEN_HEARTS: 11,
		KING_HEARTS: 12,
		ACE_CLUBS: 13,
		TWO_CLUBS: 14,
		THREE_CLUBS: 15,
		FOUR_CLUBS: 16,
		FIVE_CLUBS: 17,
		SIX_CLUBS: 18,
		SEVEN_CLUBS: 19,
		EIGHT_CLUBS: 20,
		NINE_CLUBS: 21,
		TEN_CLUBS: 22,
		JACK_CLUBS: 23,
		QUEEN_CLUBS: 24,
		KING_CLUBS: 25,
		ACE_DIAMONDS: 26,
		TWO_DIAMONDS: 27,
		THREE_DIAMONDS: 28,
		FOUR_DIAMONDS: 29,
		FIVE_DIAMONDS: 30,
		SIX_DIAMONDS: 31,
		SEVEN_DIAMONDS: 32,
		EIGHT_DIAMONDS: 33,
		NINE_DIAMONDS: 34,
		TEN_DIAMONDS: 35,
		JACK_DIAMONDS: 36,
		QUEEN_DIAMONDS: 37,
		KING_DIAMONDS: 38,
		ACE_SPADES: 39,
		TWO_SPADES: 40,
		THREE_SPADES: 41,
		FOUR_SPADES: 42,
		FIVE_SPADES: 43,
		SIX_SPADES: 44,
		SEVEN_SPADES: 45,
		EIGHT_SPADES: 46,
		NINE_SPADES: 47,
		TEN_SPADES: 48,
		JACK_SPADES: 49,
		QUEEN_SPADES: 50,
		KING_SPADES: 51,

		// hand index constants
	    HAND_HIGH_CARD: 0,
	    HAND_ONE_PAIR: 1,
	    HAND_TWO_PAIR: 2,
	    HAND_THREE_OF_A_KIND: 3,
	    HAND_STRAIGHT: 4,
	    HAND_FLUSH: 5,
	    HAND_FULL_HOUSE: 6,
	    HAND_FOUR_OF_A_KIND: 7,
	    HAND_STRAIGHT_FLUSH: 8,

	    HAND_NAMES: [
			"High Card",
			"One Pair",
			"Two Pair",
			"Three of a Kind",
			"Straight",
			"Flush",
			"Full House",
			"Four of a Kind",
			"Straight Flush"
		],

		/**
		 * Function to return the array of cards
		 */
		getCard: function ( suit, ordinal )
		{
			return this.cards [ ( suit * 13 + ordinal ) ];
		},

		getBestHand: function ( hand )
		{
			if ( this.isStraightFlush ( hand ) )
			{
				return this.HAND_STRAIGHT_FLUSH;
			}
			else if ( this.isFourOfAKind ( hand ) )
			{
				return this.HAND_FOUR_OF_A_KIND;
			}
			else if ( this.isFullHouse ( hand ) )
			{
				return this.HAND_FULL_HOUSE;
			}
			else if ( this.isFlush ( hand ) )
			{
				return this.HAND_FLUSH;
			}
			else if ( this.isStraight ( hand ) )
			{
				return this.HAND_STRAIGHT;
			}
			else if ( this.isThreeOfAKind ( hand ) )
			{
				return this.HAND_THREE_OF_A_KIND;
			}
			else if ( this.isTwoPair ( hand ) )
			{
				return this.HAND_TWO_PAIR;
			}
			else if ( this.isOnePair ( hand ) )
			{
				return this.HAND_ONE_PAIR;
			}
			else
			{
				return this.HAND_HIGH_CARD;
			}
		},

		/**
		 * Verifies the parameter is length 5 and is either card index or card instance
		 */
		checkFiveCards: function ( hand )
		{
			// Use only for debug TODO figure out debug flag
			if ( !hand || hand.length !== 5 )
			{
				throw "hand must be 5 card array";
			}

			var i;
			var c;
			var cardOfIncorrectType = false;

			for ( i = 0; i < 5; i ++ )
			{
				c = hand [ i ];

				if ( typeof c !== 'number' && !this.isCard ( c ) )
				{
					throw "hand entry must be integer or card instance";
				}
			}
		},

		/**
		 * Returns true if the cards in the hand array are a straight flush
		 */
		isStraightFlush: function ( hand )
		{
			this.checkFiveCards ( hand );
			return this.isFlush ( hand ) && this.isStraight ( hand );
		},

		/**
		 * Returns true if the cards in the hand array include four of a kind
		 */
		isFourOfAKind: function ( hand )
		{
			this.checkFiveCards ( hand );
			hand = this.ensureCards ( hand );

			return  ( hand [ 0 ].ordinal === hand [ 1 ].ordinal &&
							hand [ 0 ].ordinal === hand [ 2 ].ordinal &&
							hand [ 0 ].ordinal === hand [ 3 ].ordinal ) ||
					( hand [ 0 ].ordinal === hand [ 1 ].ordinal &&
							hand [ 0 ].ordinal === hand [ 3 ].ordinal &&
							hand [ 0 ].ordinal === hand [ 4 ].ordinal ) ||
					( hand [ 0 ].ordinal === hand [ 2 ].ordinal &&
							hand [ 0 ].ordinal === hand [ 3 ].ordinal &&
							hand [ 0 ].ordinal === hand [ 4 ].ordinal ) ||
					( hand [ 1 ].ordinal === hand [ 2 ].ordinal &&
							hand [ 1 ].ordinal === hand [ 3 ].ordinal &&
							hand [ 1 ].ordinal === hand [ 4 ].ordinal );
		},

		/**
		 * Returns true if the cards in the hand array are all in a line with ace at either end
		 */
		isFullHouse: function ( hand )
		{
			this.checkFiveCards ( hand );
			hand = this.ensureCards ( hand );
			hand.sort ( Card.prototype.compare );

			// Sorted by ordinal should be 3 and 2 or 2 and 3, check both
			return ( hand [ 0 ].ordinal === hand [ 1 ].ordinal &&
					 hand [ 0 ].ordinal === hand [ 2 ].ordinal &&
					 hand [ 3 ].ordinal === hand [ 4 ].ordinal ) ||
				   ( hand [ 0 ].ordinal === hand [ 1 ].ordinal &&
					 hand [ 2 ].ordinal === hand [ 3 ].ordinal &&
					 hand [ 2 ].ordinal === hand [ 4 ].ordinal );
		},

		/**
		 * Returns true if the cards in the hand array are all of the same suite
		 */
		isFlush: function ( hand )
		{
			this.checkFiveCards ( hand );
			hand = this.ensureCards ( hand );

			var suit = hand [ 0 ].suit;

			for ( var i = 1; i < hand.length; i ++ )
			{
				var c = hand [ i ];

				if ( c.suit !== suit )
				{
					return false;
				}
			}

			return true;
		},

		/**
		 * Returns true if the cards in the hand array are all in a line with ace at either end
		 */
		isStraight: function ( hand )
		{
			this.checkFiveCards ( hand );
			hand = this.ensureCards ( hand );
			hand.sort ( Card.prototype.compare );

			// catch the ten-ace straight first
			if ( hand.length == 5 &&
					hand [ 0 ].ordinal === this.ACE &&
					hand [ 1 ].ordinal === this.TEN &&
					hand [ 2 ].ordinal === this.JACK &&
					hand [ 3 ].ordinal === this.QUEEN &&
					hand [ 4 ].ordinal === this.KING )
			{
				return true;
			}

			var prev = hand [ 0 ].ordinal;

			for ( var i = 1; i < hand.length; i ++ )
			{
				if ( hand [ i ].ordinal !== prev + 1 )
				{
					return false;
				}

				prev = hand [ i ].ordinal;
			}

			return true;
		},

		/**
		 * Returns true if the cards in the hand array include three of a kind
		 */
		isThreeOfAKind: function ( hand )
		{
			this.checkFiveCards ( hand );
			hand = this.ensureCards ( hand );
			hand.sort ( Card.prototype.compare );

			// Sorted by ordinal so the trips should be grouped
			return !this.isFourOfAKind ( hand ) &&
				   ( ( hand [ 0 ].ordinal === hand [ 1 ].ordinal &&
					   hand [ 0 ].ordinal === hand [ 2 ].ordinal ) ||
				     ( hand [ 1 ].ordinal === hand [ 2 ].ordinal &&
					   hand [ 1 ].ordinal === hand [ 3 ].ordinal ) ||
				     ( hand [ 2 ].ordinal === hand [ 3 ].ordinal &&
  					   hand [ 2 ].ordinal === hand [ 4 ].ordinal ) );
		},

		/**
		 * Returns true if the cards in the hand array includes two pairs
		 */
		isTwoPair: function ( hand )
		{
			this.checkFiveCards ( hand );
			hand = this.ensureCards ( hand );
			hand.sort ( Card.prototype.compare );

			// Sorted by ordinal so the pairs should be grouped
			return !this.isFourOfAKind ( hand ) &&
				   ( ( hand [ 0 ].ordinal === hand [ 1 ].ordinal &&
					   hand [ 2 ].ordinal === hand [ 3 ].ordinal ) ||
				     ( hand [ 0 ].ordinal === hand [ 1 ].ordinal &&
					   hand [ 3 ].ordinal === hand [ 4 ].ordinal ) ||
				     ( hand [ 1 ].ordinal === hand [ 2 ].ordinal &&
					   hand [ 3 ].ordinal === hand [ 4 ].ordinal ) );
		},

		/**
		 * Returns true if the cards in the hand array includes one pair
		 */
		isOnePair: function ( hand )
		{
			this.checkFiveCards ( hand );
			hand = this.ensureCards ( hand );
			hand.sort ( Card.prototype.compare );

			// Sorted by ordinal so the pairs should be grouped
			return !this.isFourOfAKind ( hand ) &&
				   !this.isThreeOfAKind ( hand ) &&
				   ( hand [ 0 ].ordinal === hand [ 1 ].ordinal ||
				   	 hand [ 1 ].ordinal === hand [ 2 ].ordinal ||
				   	 hand [ 2 ].ordinal === hand [ 3 ].ordinal ||
				   	 hand [ 3 ].ordinal === hand [ 4 ].ordinal );
		},

		ensureCards: function ( hand )
		{
			if ( !hand || hand.length === 0 )
			{
				return hand;
			}

			// If card is a number, convert to the card instance
			for ( var i = 0; i < 5; i ++ )
			{
				var c = hand [ i ];

				if ( typeof c === 'number' )
				{
					hand [ i ] = this.cards [ hand [ i ] ];
				}
			}

			return hand;
		},

		ensureCard: function ( card )
		{
			if ( typeof card === 'number' )
			{
				return this.cards [ card ];
			}
			else if ( this.isCard ( card ) )
			{
				return card;
			}
			else
			{
				throw "card is not a card in deck.ensureCard";
			}
		},

		isCard: function ( toCheck )
		{
			return toCheck instanceof Card;
		},

		getHandRanking: function ( card1, card2 )
		{
			var i = 0;

			for ( i = 0; i < this.rankedStartingHands.length; i ++ )
			{
				if ( this.rankedStartingHands [ i ].matches ( card1, card2 ) )
				{
					return i + 1;
				}
			}

			throw "hand not matched!";
		}

	};

	/**
	 * Constructor function for Card class
	 */
	function Card ( suit, ordinal )
	{
		this.suit = suit;
		this.ordinal = ordinal;

		if ( suit < 0 || suit > 3 )
		{
			throw "Invalid Suit";
		}

		if ( ordinal < 0 || ordinal > 12 )
		{
			throw "Invalid Ordinal";
		}
	}

	/**
	 * Setup the Card prototype
	 */
	Card.prototype = 
	{
		suit: null,
		ordinal: null,
		
		/**
		 * Get name function for the Card class
		 */
		getName: function ()
		{
			return ORDINAL_NAMES [ this.ordinal ] + "-" + SUIT_NAMES [ this.suit ];
		},

		getIndex: function ()
		{
			return ( this.suit * 12 + this.ordinal );
		},

		/**
		 * Compares two cards
		 */
		compare: function ( a, b )
		{
			if ( typeof a === 'number' )
			{
				a = this.cards [ a ];
			}

			if ( typeof b === 'number' )
			{
				b = this.cards [ b ];
			}

			return a.ordinal - b.ordinal;
		}
	}

	// Init function
	Deck.init = function ()
	{
		var self = this;

		self.cards = [];

		for ( var suit = 0; suit <= 3; suit ++ )
		{
			for ( var ordinal = 0; ordinal <= 12; ordinal ++ )
			{
				var card = new Card ( suit, ordinal );
				self.cards.push ( card );
			}
		}
	}

	Deck.init.prototype = Deck.prototype;

	global.Deck = Deck;

} ( window ) );


var deck = Deck ();