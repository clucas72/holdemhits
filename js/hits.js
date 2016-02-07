
// Random https://gist.github.com/kerimdzhanov/7529623

/**
 * Get a random floating point number between `min` and `max`.
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {float} a random floating point number
 */
function getRandom ( min, max )
{
  return Math.random() * (max - min) + min;
}

/**
 * Get a random integer between `min` and `max`.
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {int} a random integer
 */
function getRandomInt ( min, max )
{
  return Math.floor ( Math.random () * ( max - min + 1 ) + min );
}

var randomLib = new Random ();

function getRandomMaxHandRanking ( min, max, control )
{
	var r = randomLib.weibull ( 1, 0.5 ) * 169;

	if ( r < 10 )
	{
		r = 10;
	}

	return r;
}




// Scenario Constants (TODO Classes)
var MY_HAND_AT_FLOP = 1;

/**
 * Immediately invoked anonymous function to setup our HITS library
 */
( function ( global )
{	
	var Hits = function() 
	{
		return new Hits.init();
	}

	// Object literal for Hits which includes methods for the library
	Hits.prototype = 
	{
		scenarioSeed: null,
		playerCards: null,
		commonCards: null,
		usedCardIDs: null,
		handRanking: null,

		/**
		 * Counts of possible scenarios
		 * https://www.mathsisfun.com/combinatorics/combinations-permutations-calculator.html
		 */ 
		holeCardCombinations: 1326, // pick 2 from 52
		flopCardCombinations: 19600, // pick 3 from remaining 50

		nextRandomSeed: function ()
		{
			var minHandRanking = getRandomMaxHandRanking ();

			do
			{
				this.scenarioSeed = getRandomInt ( 1, this.holeCardCombinations * this.flopCardCombinations ) - 1;
				this.setCardsToSeed ();			
			}
			while ( this.handRanking > minHandRanking );
		},

		setCardsToSeed: function ()
		{
			var holeScenario = Math.floor ( this.scenarioSeed / this.flopCardCombinations );
		
			var comb = Combination ( 52, 2, [] );
			var holeCards = comb.element ( holeScenario );

			var flopScenario = this.scenarioSeed % this.flopCardCombinations;

			// pick from 50 because 2 cards are already selected to the hole
			var comb2 = Combination ( 50, 3 );
			var flopCards = comb2.element ( flopScenario, [ holeCards [ 0 ], holeCards [ 1 ] ] );
	
			this.commonCards = [ 
								flopCards [ 0 ], 
								flopCards [ 1 ], 
								flopCards [ 2 ], 
								null, 
								null
						  ];

			this.playerCards = [ 
								[ holeCards [ 0 ], holeCards [ 1 ] ],
								[ null, null ],
								[ null, null ],
								[ null, null ],
								[ null, null ],
								[ null, null ],
								[ null, null ],
								[ null, null ]
						  ];

			this.usedCardIDs = [
									'player-1-1',
									'player-1-2',
									'flop-1',
									'flop-2',
									'flop-3'
							];


			this.handRanking = deck.getHandRanking ( holeCards [ 0 ], holeCards [ 1 ] );
		},

		getName: function ()
		{
			return "What hand do you have?";
		},

		isCorrectAnswer: function ( answer )
		{
			return answer === deck.getBestHand ( [ this.playerCards [ 0 ] [ 0 ], this.playerCards [ 0 ] [ 1 ], this.commonCards [ 0 ], this.commonCards [ 1 ], this.commonCards [ 2 ] ] );
		},

		getAnswerExplanation: function ( answer )
		{
			var bestHand = deck.getBestHand ( [ this.playerCards [ 0 ] [ 0 ], this.playerCards [ 0 ] [ 1 ], this.commonCards [ 0 ], this.commonCards [ 1 ], this.commonCards [ 2 ] ] );

			if ( bestHand === answer )
			{
				return "Correct! The hand is " + deck.HAND_NAMES [ bestHand ];
			}
			else
			{
				return "No, the hand is " + deck.HAND_NAMES [ bestHand ] + ", but you said " + deck.HAND_NAMES [ answer ] + ".";
			}
		}
	};

	// Init function
	Hits.init = function ()
	{
		var self = this;
		self.scenarios = [ MY_HAND_AT_FLOP ];
	}

	Hits.init.prototype = Hits.prototype;

	global.Hits = Hits;

} ( window ) );




