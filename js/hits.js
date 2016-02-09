
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


/**
 * Immediately invoked anonymous function to setup our HITS library
 */
( function ( global )
{	
	var ScenarioFactory = function() 
	{
		return new ScenarioFactory.init();
	}

	// Object literal for scenario factory
	ScenarioFactory.prototype = 
	{
		SCENARIO_PREFLOP_HAND_VALUE: 0,
		SCENARIO_HAND_ON_FLOP: 1,
		SCENARIO_POSSIBLE_BEATS_AT_FLOP: 2,
		SCENARIO_DRAWS_AT_TURN_AND_RIVER: 3,
		SCENARIO_TURN: 4,
		SCENARIO_HAND_MAKING_TURNS: 5,
		SCENARIO_RIVER: 6,
		SCENARIO_HAND_MAKING_RIVERS: 7,
		SCENARIO_OUTS_AT_THE_RIVER: 8,
		SCENARIO_BEATS_ON_THE_RIVER: 9,
		SCENARIO_SHOWDOWN_WINNER: 10,
		SCENARIO_SHOWDOWN_WINNING_HAND: 11,

		scenarioInstances: [ null,
							 null,
							 null,
							 null,
							 null,
							 null,
							 null,
							 null,
							 null,
							 null,
							 null,
							 null ],

		/**
		 * Return the instance for the requested scenario
		 */
		getScenarioInstance: function ( scenarioNumber )
		{
			return this.scenarioInstances [ scenarioNumber ];
		},

		/**
		 * Object literal for scenario instances
		 */
		scenarioPrototype: {

			// Answer type constants
			ANSWER_SINGLE_HAND_SELECTION: 1,
			ANSWER_MULTI_HAND_SELECTION: 2,
			ANSWER_CARD_SELECTION: 3,
			ANSWER_HAND_RANK_SELECTION: 4,
			ANSWER_MULTI_DRAW_CARD_SELECTION: 5,
			ANSWER_PLAYER_SELECTION: 6,
			ANSWER_WINNING_5_CARD_SELECTION: 7,

			// Scenario attributes
			scenarioNumber: null,
			scenarioSeed: null,
			playerCards: null,
			commonCards: null,
			usedCardIDs: null,
			answerType: null,

			nextRandomSeed: function ()
			{
				throw "Unimplemented method isCorrectAnswer";
			},

			setCardsToSeed: function ()
			{
				throw "Unimplemented method isCorrectAnswer";
			},

			getName: function ()
			{
				throw "Unimplemented method isCorrectAnswer";
			},

			isCorrectAnswer: function ( answer )
			{
				throw "Unimplemented method isCorrectAnswer";
			}
		}
	};

	// Init function
	ScenarioFactory.init = function ()
	{
		var self = this;
	}

	ScenarioFactory.init.prototype = ScenarioFactory.prototype;

	global.scenarioFactory = ScenarioFactory ();

} ( window ) );



/**
 * Immediately invoked anonymous function to setup our HandOnFlopScenario scenario class
 */
( function ( global )
{	
	var HandOnFlopScenario = function() 
	{
		return new HandOnFlopScenario.init();
	}

	// Object literal for HandOnFlopScenario which includes methods for the library
	HandOnFlopScenario.prototype = 
	{
		/**
		 * Counts of possible scenarios
		 * https://www.mathsisfun.com/combinatorics/combinations-permutations-calculator.html
		 */ 
		holeCardCombinations: 1326, // pick 2 from 52
		flopCardCombinations: 19600, // pick 3 from remaining 50

		nextRandomSeed: function ()
		{
			var minHandRanking = 200;

			if ( game.gameSettings.favourPremiumPreFlopHands )
			{
				minHandRanking = getRandomMaxHandRanking ();
			}

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
	HandOnFlopScenario.init = function ()
	{
		var self = this;
	}

	HandOnFlopScenario.init.prototype = HandOnFlopScenario.prototype;

	global.scenarioFactory.scenarioInstances [ global.scenarioFactory.SCENARIO_HAND_ON_FLOP ] = HandOnFlopScenario ();

} ( window ) );





