
/**
 * Immediately invoked anonymous function to setup our Settings class
 */
( function ( global )
{	
	var GameSettings = function() 
	{
		return new GameSettings.init();
	}

	// Object literal for scenario factory
	GameSettings.prototype = 
	{
		// When true scenarios will more likely be shown with more premium starting hands
		favourPremiumPreFlopHands: true,

		// For scenario 0 this determines the ranking leeway (above AND below) for correct answers
		handRankingLeeway: 30,

		// Length of time that a round takes
		roundTimeSeconds: 60
	};

	// Init function
	GameSettings.init = function ()
	{
		var self = this;
	}

	GameSettings.init.prototype = GameSettings.prototype;

	global.GameSettings = GameSettings;

} ( window ) );