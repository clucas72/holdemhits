/**
 * Immediately invoked anonymous function to setup our TABLE library
 */
( function ( global )
{ 
  var Table = function() 
  {
    return new Table.init();
  }

  // Object literal for Hits which includes methods for the library
  Table.prototype = 
  {
    // No Card and Hidden Card (Back) constants
    HIDDEN_CARD: -1,
    NO_CARD: -2,

    /**
     * Centres an element using it's offsetWidth and offsetHeight around the centre point
     */
    centreElementAt: function ( element, centreX, centreY )
    {
      element.style.left = centreX - ( element.offsetWidth / 2 );
      element.style.top = centreY - ( element.offsetHeight / 2 );
    },

    flyOut: function ()
    {
      //If there's no scenario fly them all out
      if ( !game.currentScenario )
      {
        $('.card-place div').removeClass ( "flyout" ).removeClass ( "flyin" ).addClass ( "flyout" );
      }
      else
      {
        var i;

        for ( i = 0; i < game.currentScenario.usedCardIDs.length; i ++ )
        {
          $('#' + game.currentScenario.usedCardIDs [ i ] ).removeClass ( "flyout" ).removeClass ( "flyin" ).addClass ( "flyout" );
        }
      }


      // $('.card').each ( function ( index, value ) 
      //     { 
      //       var x = 2000 + ( 2000 * Math.random () );
      //       var y = 2000 + ( 2000 * Math.random () );
      //       var rotation = -1000 + Math.random () * 2000;
      //       $(this).transition({x: x + 'px', y: y + 'px', rotate: rotation + 'deg', duration: 1000});      
      //     } );
    },

    flyIn: function ()
    {
      //If there's no scenario fly them all in
      if ( !game.currentScenario )
      {
        $('.card-place div').removeClass ( "flyout" ).removeClass ( "flyin" ).addClass ( "flyin" );
      }
      else
      {
        var i;

        for ( i = 0; i < game.currentScenario.usedCardIDs.length; i ++ )
        {
          $('#' + game.currentScenario.usedCardIDs [ i ] ).removeClass ( "flyout" ).removeClass ( "flyin" ).addClass ( "flyin" );
        }
      }

      // $('.card').each ( function ( index, value ) 
      //     {
      //       $(this).transition({x: '0px', y: '0px', rotate: '0deg', duration: 1000});
      //     } );
    },

    /**
     * Displays the card at the player index and card index ( 1 or 2 )
     * player must be -1 for the common cards, or 1 to 8 for the players
     * card can be undefined or null, an index 0 to 51, or a Card instance
     */
    setCard: function ( player, cardIndex, card )
    {
      if ( !player || ( ( player < 0 || player > 8 ) && player != -1 ) )
      {
        throw "Invalid Player Index, must be 0 through 8 passed to setCard";
      }

      if ( player >= 1 && player <= 8 )
      {
        if ( !cardIndex || ( cardIndex != 1 && cardIndex != 2 ) )
        {
          throw "Invalid Card Index, must be 1 or 2 for players in setCard";
        }

        this.setCardByCssSelector ( '#player-' + player + '-' + cardIndex, card );
      }
      else if ( player == -1 )
      {
        if ( !cardIndex || cardIndex < 1 || cardIndex > 5 )
        {
          throw "Invalid Card Index, must be 1 through 5 for common cards in setCard";
        }

        this.setCardByCssSelector ( '#flop-' + cardIndex, card ); 
      }
    },

    /**
     * Displays the css class for the card on the indicated jquery selected object
     * card can be undefined or null, an index 0 to 51, or a Card instance
     */
    setCardByCssSelector: function ( jQuerySelector, card )
    {
      var cssClassName = null;

      if ( ( !card && card !== 0 ) || card === this.NO_CARD )
      {
        cssClassName = "No-Card";
      }
      else if ( card === this.HIDDEN_CARD )
      {
        cssClassName = "Hidden-Card";
      }
      else if ( typeof card === 'number' )
      {
        cssClassName = deck.cards [ card ].getName ();
      }
      else
      {
        cssClassName = card.getName ();
      }

      $(jQuerySelector).removeClass ().addClass ( "flyout" ).addClass ( cssClassName );
    },

    /**
     * Clears all cards to the empty card
     */
    clearCards: function ()
    {
      this.setCardByCssSelector ( '.card-place div', false );
    },

    /**
     * Hides the player's cards at the index (as though not in the hand)
     */
    hidePlayer: function ( playerIndex )
    {
      this.setCard ( playerIndex, 1, this.NO_CARD );
      this.setCard ( playerIndex, 2, this.NO_CARD );
    },

    displayGameTable: function ( showTimer )
    {
      if ( showTimer )
      {
        $("#timer").show ();
      }
      else
      {
        $("#timer").hide (); 
      }

      $("#round-result").hide ();
      $("#answer-review").hide ();
 
      $("#stats").show ();
      $("#table").show ();
      $("#answer").show ();
    },

    startScenario: function ( scenarioInstance )
    {
      game.currentScenario = scenarioInstance;

      if ( game.currentScenario.scenarioNumber === scenarioFactory.SCENARIO_PREFLOP_HAND_RANKING )
      {
        console.log ( "A" );
        $("#hand-ranking").show ();
        $("#hand-buttons").hide ();
      }
      else if ( game.currentScenario.scenarioNumber === scenarioFactory.SCENARIO_HAND_ON_FLOP )
      {
        console.log ( "B" );
        $("#hand-buttons").show ();
        $("#hand-ranking").hide ();
      }

      game.table.showScenario ();
    },

    finalizeScenarioSetup: function ()
    {
      if ( game.inRound || game.inReview )
      {
        $('.result').hide ();

        $("#blind").hide ();
        $("#setup").hide ();
        $("#correct-icon").hide ();
        $("#incorrect-icon").hide ();
      }
    },

    showScenario: function ()
    {      
      if ( game.inRound || game.inReview )
      {
        if ( game.inRound )
        {
          $("#blind").show ();
          $("#setup").show ();

          $("#setup-hint").text ( game.currentScenario.getName () );
          $("#setup-hint").removeClass ().addClass ( "blowout" );
        }

        $("#question-repeat").html ( game.currentScenario.getName () );

        if ( game.inRound )
        {
          game.currentScenario.nextRandomSeed ();
        }

        game.table.setCardsToScenario ();

        game.table.flyIn ();
        $("#answer").removeClass ().addClass ( "slideUp" );

        window.setTimeout ( game.table.finalizeScenarioSetup, 1200 );
      }
    },

    answer: function ( answerValue )
    {
      if ( game.inRound )
      {
        var isCorrect = game.currentScenario.isCorrectAnswer ( answerValue );

        $("#blind").show ();
        $("#result").show ().removeClass ().css({ opacity: 1 });

        if ( isCorrect )
        {
          game.answeredCorrectly ++;
          $("#correct-icon").show ();
        }
        else
        {
          $("#incorrect-icon").show ();
        }

        game.answered ++;


        window.setTimeout ( game.nextScenario, 500 );
        this.flyOut ();

        $("#answer").removeClass ().addClass ( "slideDown" );
        $("#result").addClass ( "fade1" );

        // TODO should have a class to capture this data
        game.questionsForReview.push ( [ game.currentScenario, game.currentScenario.scenarioSeed, answerValue ] );
      }
    },

    review: function ( index )
    {
      this.displayGameTable ( false );
      this.reviewScenario ( index, game.questionsForReview [ index ] [ 0 ], game.questionsForReview [ index ] [ 1 ], game.questionsForReview [ index ] [ 2 ] );
    },

    reviewScenario: function ( index, scenario, scenarioSeed, answer )
    {
      game.currentScenario = scenario;
      game.currentScenario.scenarioSeed = scenarioSeed;
      game.currentScenario.setCardsToSeed ();

      game.table.repeatScenario ();

      $("#title").text ( "Seed #" + game.currentScenario.scenarioSeed );
      $("#answer-section").hide ();
      $("#answer-review").show ();

      $("#question-repeat").html ( "Hit " + ( index + 1 ) + " of " + game.questionsForReview.length + ": " + game.currentScenario.getName () );
      
      $("#answer-description").html ( game.currentScenario.getAnswerExplanation ( answer ) );
    },

    previousReview: function ()
    {
      game.reviewIndex --;

      if ( game.reviewIndex < 0 )
      {
        game.reviewIndex = game.questionsForReview.length - 1;
      }

      this.review ( game.reviewIndex );
    },

    nextReview: function ()
    {
      game.reviewIndex ++;

      if ( game.reviewIndex >= game.questionsForReview.length )
      {
        game.reviewIndex = 0;
      }

      this.review ( game.reviewIndex );
    },

    setCardsToScenario: function ()
    {
      var i;
      var card;

      var i;

      for ( i = 0; i < 8; i ++ )
      {
        card = game.currentScenario.playerCards [ i ] [ 0 ];

        if ( card !== null )
        {
          game.table.setCard ( i + 1, 1, card );
        }
        else
        {
           game.table.setCard ( i + 1, 1, this.NO_CARD );
        }
        
        card = game.currentScenario.playerCards [ i ] [ 1 ];

        if ( card !== null )
        {
          game.table.setCard ( i + 1, 2, card );
        }
        else
        {
          game.table.setCard ( i + 1, 2, this.NO_CARD );
        }
      }

      for ( i = 0; i < 5; i ++ )
      {
        card = game.currentScenario.commonCards [ i ];

        if ( i !== null )
        {
          game.table.setCard ( game.table.COMMON_CARDS_INDEX, i + 1, card );    
        }
        else
        {
          game.table.setCard ( game.table.COMMON_CARDS_INDEX, i + 1, this.NO_CARD );
        }
      }
    }
  };

  // Init function
  Table.init = function ()
  {
    var self = this;

    // card area index constants
    self.PLAYER_1_CARDS_INDEX = 1;
    self.PLAYER_2_CARDS_INDEX = 2;
    self.PLAYER_3_CARDS_INDEX = 3;
    self.PLAYER_4_CARDS_INDEX = 4;
    self.PLAYER_5_CARDS_INDEX = 5;
    self.PLAYER_6_CARDS_INDEX = 6;
    self.PLAYER_7_CARDS_INDEX = 7;
    self.PLAYER_8_CARDS_INDEX = 8;
    self.COMMON_CARDS_INDEX = -1;
  }

  Table.init.prototype = Table.prototype;

  global.Table = Table;

} ( window ) );
