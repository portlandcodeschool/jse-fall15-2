// Simple version (no error-detection)

// function()--> possible return values



	//Build 4 arrays:  hearts, with indeces 0, 4, 8, 12 etc.  heart[0] would return ace of hearts
	 //id # 26 would be 7 of clubs
	 //THE SUIT ARRAYS//
	 var hearts=[0,4,8,12,16,20,24,28,32,36,40,44,48];
	 var diamonds=[1,5,9,13,17,21,25,29,33,37,41,45,49];
	 var spades=[2,6,10,14,18,22,26,30,34,38,42,46,50];
	 var clubs=[3,7,11,15,19,23,27,31,35,39,43,47,51];
	
	 //THE 

	//THE COLORS//
	 var red= new Array (hearts, diamonds);
	 var black= new Array (spades, clubs);
	 //THE CARDID//
	 var ace = [0,1,2,3];
	 var two = [4,5,6,7];
	 var three = [8,9,10,11];
	 var four = [12,13,14,15];
	 var five = [16,17,18,19];
	 var six = [20,21,22,23];
	 var seven = [24,25,26,27];
	 var eight = [28, 29, 30, 31];
	 var nine = [32, 33, 34, 35];
	 var ten = [36, 37, 38, 39];
	 var eleven =[40, 41, 42, 43];
	 var twelve = [44, 45, 46, 47];
	 var thirteen = [48, 49, 50, 51];

	 var deck = [ace, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen];

	 var ace = 3;
	 var two = 7;
	 var three= 11;
	 var four=

function rank(card) { // --> 1..13
		for (var i = 51; i-4 > card; i-4) {
				
				
			 

			 else if (card/4 < i) {
			 	return 'one';
			 }
		}	

	 	}

	}
	//var cardRank = ???
	//return cardRank which is a number between 0 and 51


	}
}

function suit(card) { // --> 1..4
}

function cardID(rank,suit) { // --> 0..51
}

function color(card) { // -->"red","black"
}

function name(card) { // --> string
}


// TESTING:
function assert(claim,message) {
    if (!claim) console.error(message);
}
assert(rank(0)===1,  "Test 1 failed");
assert(rank(3)===1,  "Test 2 failed");
assert(rank(51)===13,"Test 3 failed");
assert(suit(0)===1,  "Test 4 failed");
assert(suit(5)===2,  "Test 5 failed");
assert(suit(51)===4, "Test 6 failed");
assert(cardID(1,1)===0,    "Test 7 failed");
assert(cardID(13,4)===51,  "Test 8 failed");
assert(cardID(8,3)===30,   "Test 9 failed");
assert(color(0)==='red',   "Test 10 failed");
assert(color(2)==='black', "Test 11 failed");
assert(name(5)==='Two of Diamonds', "Test 12 failed");
assert(name(51)==='King of Clubs',  "Test 13 failed");

