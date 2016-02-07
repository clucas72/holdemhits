/**
 * Ranked Starting Hands
 * Immediately invoked anonymous function to setup our Deck
 */
( function ( global )
{
	
	var RankedStartingHand = function ( ordinal1, ordinal2, suited ) 
	{
		return new RankedStartingHand.init ( ordinal1, ordinal2, suited );
	}

	// Object literal for a RankedStartingHand which includes methods and attributes
	RankedStartingHand.prototype = 
	{
		ordinal1: null,
		ordinal2: null,
		suited: null,

		matches: function ( card1, card2 )
		{
			card1 = global.deck.ensureCard ( card1 );
			card2 = global.deck.ensureCard ( card2 );

			var ordinalsMatch = ( card1.ordinal === this.ordinal1 && card2.ordinal === this.ordinal2 ) ||
				 				( card2.ordinal === this.ordinal1 && card1.ordinal === this.ordinal2 );

			var suitMatch = card1.suit === card2.suit;

			return ordinalsMatch && ( !this.suited || ( this.suited && suitMatch ) );
		}
	};

	// Init function
	RankedStartingHand.init = function ( ordinal1, ordinal2, suited )
	{
		this.ordinal1 = ordinal1;
		this.ordinal2 = ordinal2;
		this.suited = suited;
	}

	RankedStartingHand.init.prototype = RankedStartingHand.prototype;

	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.ACE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.KING, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.QUEEN, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.KING, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.JACK, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.QUEEN, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.QUEEN, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.JACK, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.TEN, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.KING, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.JACK, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.TEN, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.JACK, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.TEN, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.TEN, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.TEN, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.QUEEN, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.NINE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.QUEEN, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.NINE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.JACK, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.NINE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.EIGHT, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.JACK, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.EIGHT, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.NINE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.NINE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.NINE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.FIVE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.SEVEN, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.JACK, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.TEN, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.FOUR, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.SIX, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.THREE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.TEN, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.EIGHT, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.SEVEN, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.TEN, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.TEN, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.TWO, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.EIGHT, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.EIGHT, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.EIGHT, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.SEVEN, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.EIGHT, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.SIX, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SIX, global.deck.SIX, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.FIVE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.SEVEN, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.FOUR, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.SEVEN, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.SEVEN, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.SEVEN, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.NINE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.SEVEN, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.THREE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FIVE, global.deck.FIVE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.SIX, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.TWO, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.SIX, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.NINE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.NINE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.SIX, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.FIVE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FOUR, global.deck.FOUR, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.NINE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SIX, global.deck.FIVE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.NINE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.EIGHT, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.FOUR, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.SIX, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FIVE, global.deck.FOUR, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.SIX, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.THREE, global.deck.THREE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.FIVE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.THREE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.SIX, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TWO, global.deck.TWO, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.TWO, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.FIVE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.SEVEN, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.FIVE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SIX, global.deck.FOUR, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.FIVE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.FOUR, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.FOUR, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FIVE, global.deck.THREE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.THREE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.SIX, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.EIGHT, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.EIGHT, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.FIVE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.FIVE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.THREE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.EIGHT, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.TWO, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.FOUR, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.EIGHT, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.FOUR, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.EIGHT, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FOUR, global.deck.THREE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.THREE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.TWO, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.SEVEN, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SIX, global.deck.THREE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.FOUR, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.TWO, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FIVE, global.deck.TWO, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.SEVEN, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.FOUR, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.SIX, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FOUR, global.deck.TWO, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.THREE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.THREE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.SEVEN, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.SEVEN, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.TWO, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.FIVE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.SIX, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.THREE, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.THREE, global.deck.TWO, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SIX, global.deck.TWO, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.SEVEN, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.SEVEN, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.FOUR, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.TWO, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.SIX, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.THREE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SIX, global.deck.FIVE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.SIX, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.TWO, true ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.TWO, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FIVE, global.deck.FOUR, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.SIX, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.FIVE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.FIVE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.SIX, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.FOUR, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.SIX, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SIX, global.deck.FOUR, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.THREE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.FIVE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.FIVE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.TWO, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FIVE, global.deck.THREE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.FOUR, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.FIVE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.FOUR, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.FIVE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.THREE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FOUR, global.deck.THREE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.TWO, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.FOUR, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SIX, global.deck.THREE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.FOUR, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.THREE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FIVE, global.deck.TWO, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.TWO, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.FOUR, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FOUR, global.deck.TWO, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.THREE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.THREE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.TWO, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.THREE, global.deck.TWO, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SIX, global.deck.TWO, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.THREE, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.TWO, false ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.TWO, false ) );


} ( window ) );