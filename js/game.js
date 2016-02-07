

// built off http://www.williammalone.com/articles/html5-game-scaling/

var game = {
    element: document.getElementById("gameContainer"),
    line: document.getElementById("line"),
    commonCards: document.getElementById("common-cards-group"),
    playerCards: [ 
        document.getElementById("player-1-cards-group"),
        document.getElementById("player-2-cards-group"),
        document.getElementById("player-3-cards-group"),
        document.getElementById("player-4-cards-group"),
        document.getElementById("player-5-cards-group"),
        document.getElementById("player-6-cards-group"),
        document.getElementById("player-7-cards-group"),
        document.getElementById("player-8-cards-group")
      ],
    table: Table (),
    currentScenario: null,
    width: 1280,
    height: 800,
    safeWidth: 1280,
    safeHeight: 800,
    inRound: false,
    answered: 0,
    answeredCorrectly: 0,
    questionsForReview: [],
    inReview: false,
    reviewIndex: 0,

    playAgain: function ()
    {
      game.table.displayGameTable ( true );
      game.inRound = true;
 
      game.questionsForReview = [];
      game.table.startScenario ( Hits () );
    },

    endRound: function ()
    {
      game.inRound = false;

      // figure out accuracy
      var accuracy = game.answeredCorrectly / game.answered;
      var accuracyStars = 0;

      if ( accuracy >= 1.0 )
      {
        accuracyStars = 4;
      }
      else if ( accuracy >= 0.9 )
      {
        accuracyStars = 3;
      }
      else if ( accuracy >= 0.7 )
      {
        accuracyStars = 2;
      }
      else if ( accuracy >= 0.5 )
      {
        accuracyStars = 1;
      }
      else
      {
        accuracyStars = 0;
      }

      // figure out speed
      var speedStars = 0;

      if ( game.answered >= 50 )
      {
        speedStars = 4;
      }
      else if ( game.answered >= 40 )
      {
        speedStars = 3;
      }
      else if ( game.answered >= 30 )
      {
        speedStars = 2;
      }
      else if ( game.answered >= 20 )
      {
        speedStars = 1;
      }

      $("#accuracy-star-1").removeClass ().addClass ( accuracyStars >= 1 ? "gold-star" : "gray-star" );
      $("#accuracy-star-2").removeClass ().addClass ( accuracyStars >= 2 ? "gold-star" : "gray-star" );
      $("#accuracy-star-3").removeClass ().addClass ( accuracyStars >= 3 ? "gold-star" : "gray-star" );
      $("#accuracy-star-4").removeClass ().addClass ( accuracyStars >= 4 ? "gold-star" : "gray-star" );

      $("#speed-star-1").removeClass ().addClass ( speedStars >= 1 ? "gold-star" : "gray-star" );
      $("#speed-star-2").removeClass ().addClass ( speedStars >= 2 ? "gold-star" : "gray-star" );
      $("#speed-star-3").removeClass ().addClass ( speedStars >= 3 ? "gold-star" : "gray-star" );
      $("#speed-star-4").removeClass ().addClass ( speedStars >= 4 ? "gold-star" : "gray-star" );

      // Display results
      $("#result").hide();
      $("#setup").hide();

      $("#stats").hide ();
      $("#table").hide ();
      $("#answer").hide ();

      // Disable buttons to stop panic clicks
      $('#round-result-actions').removeClass ().addClass ( "slideDown" );

      window.setTimeout ( game.showActionButtons, 2000 );

      if ( game.questionsForReview && game.questionsForReview.length > 0 )
      {
        $("#action-review-answers" ).show ();
      }
      else
      {
        $("#action-review-answers" ).hide (); 
      }

      // Show results
      $("#round-result").show ();
      $("#blind").show ();
    },

    showActionButtons: function ()
    {
      $('#round-result-actions').removeClass ().addClass ( "slideUp" );
    },

    reviewRound: function ()
    {
      game.reviewIndex = 0;
      game.inReview = true;
      game.table.review ( game.reviewIndex );
    },

    updateTimer: function ()
    {
      if ( game.inRound )
      {
        var elapsedTime = Date.now () - game.table.startTime;
        var seconds = 60 - Math.round ( elapsedTime / 1000 );

        if ( seconds <= 0 )
        {
          game.endRound ();
        }
        else
        {
          if ( seconds < 10 )
          {
            document.getElementById ( "timer" ).innerHTML = "0:0" + seconds;
          }
          else
          {
            document.getElementById ( "timer" ).innerHTML = "0:" + seconds;
          }
        }
      }
    }
  }
  
  resizeGame = function () {
  
    var viewport, newGameWidth, newGameHeight, newGameX, newGameY;
          
    // Get the dimensions of the viewport
    viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    // Determine game size
    if (game.height / game.width > viewport.height / viewport.width) {
      if (game.safeHeight / game.width > viewport.height / viewport.width) {
          // A
          newGameHeight = viewport.height * game.height / game.safeHeight;
          newGameWidth = newGameHeight * game.width / game.height;
      } else {
          // B
          newGameWidth = viewport.width;
          newGameHeight = newGameWidth * game.height / game.width;
      }
    } else {
      if (game.height / game.safeWidth > viewport.height / viewport.width) {
        // C
        newGameHeight = viewport.height;
        newGameWidth = newGameHeight * game.width / game.height;
      } else {
        // D
        newGameWidth = viewport.width * game.width / game.safeWidth;
        newGameHeight = newGameWidth * game.height / game.width;
      }
    }
  
    game.element.style.width = newGameWidth + "px";
    game.element.style.height = newGameHeight + "px";
      
    newGameX = (viewport.width - newGameWidth) / 2;
    newGameY = (viewport.height - newGameHeight) / 2;
      
    // Set the new padding of the game so it will be centered
    game.element.style.margin = newGameY + "px " + newGameX + "px";

    // Position the card locations around the board (scaled to screen)
    var gameCentreX = newGameX + ( newGameWidth / 2 );
    var gameCentreY = newGameY + ( newGameHeight / 2 );


    

 /*   var lineTop = game.line.style.top + newGameY;
    var lineLeft = game.line.style.left;
    var lineWidth = game.line.style.width;
    var lineHeight = game.line.style.height;
    var lineBottom = lineTop + lineHeight;
    var lineRight = lineLeft + lineWidth;

    // game.line.style.width = lineWidth + "px";
    // game.line.style.height = lineHeight + "px";
    // game.line.style.left = lineLeft + "px";
    // game.line.style.top = lineTop + "px";
    game.line.style.borderRadius = Math.round ( newGameHeight * 0.4 ) + "px";

    // adjust for border
    lineTop += 5;
    lineBottom += 5;
    lineLeft += 5;
    lineRight += 5;

    var leftCentrePlayersCentreX = lineLeft + ( lineWidth / 5 );
    var rightCentrePlayersCentreX = lineRight - ( lineWidth / 5 );
*/
 //   game.table.centreElementAt ( game.commonCards, gameCentreX, gameCentreY );

    // bottom centre player
   /* game.table.centreElementAt ( game.playerCards [ 0 ], gameCentreX, lineBottom );

    // bottom left player
    game.table.centreElementAt ( game.playerCards [ 1 ], leftCentrePlayersCentreX, lineBottom );    

    // left player
    game.table.centreElementAt ( game.playerCards [ 2 ], lineLeft, gameCentreY );

    // top left player
    game.table.centreElementAt ( game.playerCards [ 3 ], leftCentrePlayersCentreX, lineTop );    

    // top centre player
    game.table.centreElementAt ( game.playerCards [ 4 ], gameCentreX, lineTop );

    // top right player
    game.table.centreElementAt ( game.playerCards [ 5 ], rightCentrePlayersCentreX, lineTop );    

    // right player
    game.table.centreElementAt ( game.playerCards [ 6 ], lineRight, gameCentreY );

    // bottom right player
    game.table.centreElementAt ( game.playerCards [ 7 ], rightCentrePlayersCentreX, lineBottom );    
*/
    // Scale the cards
    // http://ricostacruz.com/jquery.transit
    var scaleValue = 1.25 * newGameWidth / game.width;
    $('.card-place div').css ( "width", scaleValue * 52.0 );
    $('.card-place div').css ( "height", scaleValue * 82.8 );
    
    //transition({scale: scaleValue, duration: 0 });
  };

/**
 * Set up UI hooks on load
 */

// Resize to ensure proportions and card size scaled okay
window.addEventListener("resize", resizeGame);
resizeGame();

// Tip for hand buttons (unused)
$( "#hand-straight-flush" ).data ( "tip", deck.HAND_STRAIGHT_FLUSH );
$( "#hand-four-of-a-kind" ).data ( "tip", deck.HAND_FOUR_OF_A_KIND );
$( "#hand-full-house" ).data ( "tip", deck.HAND_FULL_HOUSE );
$( "#hand-flush" ).data ( "tip", deck.HAND_FLUSH );
$( "#hand-straight" ).data ( "tip", deck.HAND_STRAIGHT );
$( "#hand-three-of-a-kind" ).data ( "tip", deck.HAND_THREE_OF_A_KIND );
$( "#hand-two-pair" ).data ( "tip", deck.HAND_TWO_PAIR );
$( "#hand-one-pair" ).data ( "tip", deck.HAND_ONE_PAIR );
$( "#hand-high-card" ).data ( "tip", deck.HAND_HIGH_CARD );

// Start the scenario
//game.playAgain ();

setInterval(game.updateTimer, 300);

$("#result").hide();
$("#setup").hide();

$("#stats").hide ();
$("#table").hide ();
$("#answer").hide ();

game.playAgain ();