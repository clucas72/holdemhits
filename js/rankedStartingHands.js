/**
 * Ranked Starting Hands
 * Immediately invoked anonymous function to setup our Deck
 */
( function ( global )
{
	
	var RankedStartingHand = function ( ordinal1, ordinal2, suited, names ) 
	{
		return new RankedStartingHand.init ( ordinal1, ordinal2, suited, names );
	}

	// Object literal for a RankedStartingHand which includes methods and attributes
	RankedStartingHand.prototype = 
	{
		ordinal1: null,
		ordinal2: null,
		suited: null,
		names: null,

		matches: function ( card1, card2 )
		{
			card1 = global.deck.ensureCard ( card1 );
			card2 = global.deck.ensureCard ( card2 );

			var ordinalsMatch = ( card1.ordinal === this.ordinal1 && card2.ordinal === this.ordinal2 ) ||
				 				( card2.ordinal === this.ordinal1 && card1.ordinal === this.ordinal2 );

			var suitMatch = card1.suit === card2.suit;

			return ordinalsMatch && this.suited === suitMatch;
		},

		getName: function ()
		{
			var handName = deck.ORDINAL_NAMES [ this.ordinal1 ] + "-" + deck.ORDINAL_NAMES [ this.ordinal2 ];

			if ( this.suited )
			{
				handName += " Suited";
			}
			else
			{
				handName += " Unsuited";
			}

			return handName;
		}
	};

	// Init function
	RankedStartingHand.init = function ( ordinal1, ordinal2, suited, names )
	{
		this.ordinal1 = ordinal1;
		this.ordinal2 = ordinal2;
		this.suited = suited;
		this.names = names;
	}

	RankedStartingHand.init.prototype = RankedStartingHand.prototype;

	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.ACE, false, [ "Bullets", "Rockets" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.KING, false, [ "Cowboys", "King Kong" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.QUEEN, false, [ "Ladies", "Cowgirls" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.KING, true, [ "Big Slick", "Anna Kournikova" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.JACK, false, [ "Hooks", "Fishhooks", "Jokers", "Kid Dyn-o-mite" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.QUEEN, true, [ "Little Slick", "Mrs. Slick" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.QUEEN, true, [ "Marriage", "Royalty" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.JACK, true, [ "Blackjack", "Ajax", "Jackass" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.TEN, false, [ "Binary", "Dimes", "TNT", "Boxcars" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.KING, false, [ "Big Slick", "Anna Kournikova" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.JACK, true, [ "Kojack", "King John" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.TEN, true, [ "Johnny Moss", "A-Team", "Bookends" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.JACK, true, [ "Maverick", "Oedipus Rex" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.TEN, true, [ "Katie", "Big Al" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.TEN, true, [ "Quint", "Robert Varkonyi" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.TEN, true, [ "Cloutier" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.QUEEN, false, [ "Little Slick", "Mrs. Slick" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.NINE, false, [ "Wayne Gretzky", "German Virgin" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.QUEEN, false, [ "Marriage", "Royalty" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.NINE, true, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.JACK, false, [ "Blackjack", "Ajax", "Jackass" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.NINE, true, [ "Canine", "Dog", "Fido", "Sawmill", "The Donk" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.EIGHT, true, [ "Dead Man's Hand" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.JACK, false, [ "Kojak", "King Kong", "Bachelor Hand" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.EIGHT, false, [ "Snowmen", "Infinities", "Double Infinity", "Little Oldsmobile" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.NINE, true, [ "Countdown" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.NINE, true, [ "Quinine", "The Hellory" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.NINE, true, [ "T.J. Cloutier" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.FIVE, true, [ "High Five" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.SEVEN, true, [ "Slap Shot" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.JACK, false, [ "Maverick", "Oedipus Rex" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.TEN, false, [ "Bookends", "Johnny Moss" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.FOUR, true, [ "Transvestite" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.SIX, true, [ "" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.THREE, true, [ "Baskin Robbins", "Ashtray" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.TEN, false, [ "Katie", "Big Al" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.EIGHT, true, [ "Kokomo", "Kate" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.SEVEN, false, [ "Hockey Sticks", "Mullets" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.TEN, false, [ "Quint", "Robert Varkonyi" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.TEN, false, [ "Cloutier" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.TWO, true, [ "Hunting Season" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.EIGHT, true, [ "Tetris" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.EIGHT, true, [ "Kuwait" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.EIGHT, true, [ "Jeffery Dahmer" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.SEVEN, true, [ "Columbia River" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.EIGHT, true, [ "Oldsmobile" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.SIX, true, [ "Kicks" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SIX, global.deck.SIX, false, [ "Cherries" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.FIVE, true, [ "Seattle Special" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.SEVEN, true, [ "RPM" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.FOUR, true, [ "Fork" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.SEVEN, true, [ "Persian Carpet Ride" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.SEVEN, true, [ "Bowling Hand" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.SEVEN, true, [ "Computer Hand" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.NINE, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.SEVEN, true, [ "Jack Daniels" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.THREE, true, [ "King Crab", "Sizzler", "Three Kings", "Alaska Hand" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FIVE, global.deck.FIVE, false, [ "Presto", "Speed Limit" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.SIX, true, [ "Trombones", "Union Oil", "Philadelphia" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.TWO, true, [ "Big Fritz", "Donald" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.SIX, true, [ "PB&J" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.NINE, false, [ "Countdown" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.NINE, false, [ "Canine", "Dog" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.SIX, true, [ "Henry Bowen" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.FIVE, true, [ "Granny Mae" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FOUR, global.deck.FOUR, false, [ "Sailboats", "Magnum", "Darth Vader (if spades)" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.NINE, false, [ "TJ Cloutier" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SIX, global.deck.FIVE, true, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.NINE, false, [ "Quinine" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.EIGHT, false, [ "Dead Man's Hand" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.FOUR, true, [ "Housework" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.SIX, true, [ "Railroad", "Prom Night", "Valentine's Day (if hearts)" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FIVE, global.deck.FOUR, true, [ "Jesse Jamess", "Jane Russel", "Moneymaker" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.SIX, true, [ "Sweet" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.THREE, global.deck.THREE, false, [ "Treys", "Crabs" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.FIVE, true, [ "Heinz" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.THREE, true, [ "Posh Gay Waiter" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.SIX, true, [ "Jack Talley" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TWO, global.deck.TWO, false, [ "Ducks" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.TWO, true, [ "Daisy" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.FIVE, false, [ "High Five" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.SEVEN, false, [ "Slap Shot" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.FIVE, true, [ "Motown", "Jackson Five" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SIX, global.deck.FOUR, true, [ "Gilchrist", "The Rabbit" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.FIVE, true, [ "Orwell" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.FOUR, true, [ "Flat Tire" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.FOUR, false, [ "Transvestite" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FIVE, global.deck.THREE, true, [ "Bully Johnson" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.THREE, true, [ "J-Lo" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.SIX, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.EIGHT, false, [ "Tetris" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.EIGHT, false, [ "Kokomo", "Kate" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.FIVE, true, [ "Dolly Parton", "Full-Time Job" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.FIVE, true, [ "Five and Dime", "Woolworths" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.THREE, false, [ "Baskin Robbins", "Ashtray" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.EIGHT, false, [ "Oldsmobile" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.TWO, true, [ "Heckle and Jeckle" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.FOUR, true, [ "Cambodian Slick" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.EIGHT, false, [ "Jeffrey Dahmer" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.FOUR, true, [ "Good Buddy", "Over and Out", "Roger That" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.EIGHT, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FOUR, global.deck.THREE, true, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.THREE, true, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.ACE, global.deck.TWO, false, [ "Acey-Deucey", "Drinking Age" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.SEVEN, false, [ "King Salmon" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SIX, global.deck.THREE, true, [ "Blockey" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.FOUR, true, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.TWO, true, [ "Doyle Brunson", "Texas Dolly" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FIVE, global.deck.TWO, true, [ "Bomber" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.SEVEN, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.FOUR, true, [ "Gold Rush", "San Francisco" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.SIX, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FOUR, global.deck.TWO, true, [ "Willie Mays", "The Answer" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.THREE, true, [ "Hachem" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.THREE, true, [ "Jack Benny", "The Sik" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.SEVEN, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.SEVEN, false, [ "Jack Daniel's" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.TWO, true, [ "Montana Banana" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.FIVE, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.SIX, false, [ "Trombones", "Union Oil", "Philadelphia" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.THREE, true, [ "Raquel Welch" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.THREE, global.deck.TWO, true, [ "Can of Corn" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SIX, global.deck.TWO, true, [ "Ainsworth" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.SEVEN, false, [ "Computer Hand" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.SEVEN, false, [ "Jack Daniel's" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.FOUR, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.TWO, true, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.SIX, false, [ "Maxwell Smart" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.THREE, false, [ "King Crab", "Sizzler", "Three Kings", "Alaska Hand" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SIX, global.deck.FIVE, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.SIX, false, [ "PB&J" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.TWO, true, [ "Velvet Hammer" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.KING, global.deck.TWO, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FIVE, global.deck.FOUR, false, [ "Jesse James", "Colt 45", "Moneymaker" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.SIX, false, [ "Dinner for Two" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.FIVE, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.FIVE, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.SIX, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.FOUR, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.SIX, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SIX, global.deck.FOUR, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.THREE, false, [ "San Francisco Busboy" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.FIVE, false, [ "" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.FIVE, false, [ "Motown", "Jackson Five" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.QUEEN, global.deck.TWO, false, [  ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FIVE, global.deck.THREE, false, [  ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.FOUR, false, [ "Flat Tire" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.FIVE, false, [ "Dolly Parton", "Full-Time Job" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.FOUR, false, [ "Double Down", "Blackjack Hand" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.FIVE, false, [ "Five and Dime", "Woolworths" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.THREE, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FOUR, global.deck.THREE, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.JACK, global.deck.TWO, false, [  ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.FOUR, false, [ "Good Buddy", "Over and Out", "Roger That" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SIX, global.deck.THREE, false, [ "Blocky" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.FOUR, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.THREE, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FIVE, global.deck.TWO, false, [ "Bomber" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.TEN, global.deck.TWO, false, [ "Doyle Brunson" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.FOUR, false, [ "Gold Rush", "San Francisco" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.FOUR, global.deck.TWO, false, [ "Willie Mays" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.THREE, false, [ "Hachem" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.THREE, false, [ "Jack Benny" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.NINE, global.deck.TWO, false, [ "Montanan Banana" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.THREE, global.deck.TWO, false, [ "Can of Corn" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SIX, global.deck.TWO, false, [ "Ainsworth" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.THREE, false, [ "Raquel Welch" ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.EIGHT, global.deck.TWO, false, [ ] ) );
	global.deck.rankedStartingHands.push ( RankedStartingHand ( global.deck.SEVEN, global.deck.TWO, false, [ "The Hammer", "Beer Hand" ] ) );


} ( window ) );