Homework Week 2
Tim Johnson

1a)	// A function to calculate improper fraction and displays in format 'x n/d' where x is the rounded number of times d goes into n
	function functionString(n,d){
		return (Math.floor(n/d) + ' ' + Math.floor(n) % Math.floor(d) + '/' + d); 
	}
	var resultString = functionString(7,4)
1b)
	// Function that returns formatted improper fraction where zeroes do not appear as coefficients or numerators
	function functionString(n,d){
		var coeff = Math.floor(n/d); //variable for checking if coefficient is == 0
		var numer = n % d; // variable for checking if numerator is == 0 after n mod d
		// if user enters a zero for a denominator
		if (d == 0){
			return "You cannot have \'0\' for a denominator";  
		}
		// if numer is less than denom (coefficient will be zero)
		else if (coeff == 0 && numer > 0){
			return (Math.floor(n) % Math.floor(d) + '/' + d);
		}
		// if not an improper fraction (numerator is less than denominator)
		else if (numer < 1){
			return Math.floor(n/d);
		}
		// if improper fraction that does not meet criteria of above if statements 
		else{
			return (Math.floor(n/d) + ' ' + Math.floor(n) % Math.floor(d) + '/' + d);
		}
	}
	var resultString = functionString(8,4);
		console.log(resultString);
	var resultString = functionString(3,4);
		console.log(resultString);
		
2a)
	var i = Math.round(n);
2b)
	var y = (x? false : true) ? false : x;
2c)
	var count = 15 - i;
	while (count<15){ 
	count = count+1;
	i -= 1;
	console.log(i + 1);
	}
	
2d) 
	var x;
	if (!a && !b)
		x = 2;
	else if (!a && b)
		x = 1;
	else
		x = 0;
3a)
	// letterTriangle function returns a triangle of letters going from A to the number of the letters sent as an argument vertically 
	// with each line containing the first letter down to 'A' horizontally
	function letterTriangle(n){
		var letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		var resultString = 'A';
		if (n > 26 || n < 1)
			resultString = 'Please enter a number between 1 and 26';
		else
			for (var i = 0; i < (n-1); i++){
				resultString += ('\n');
				for (var j = (i + 1); j >= 0; j--){
					resultString += (letterArray[j]);
				}
			}		
		return resultString;
		}
    var triangle = letterTriangle(10);
	console.log(triangle);
	
3b)	// Returns all formatted lyrics to 'The Twelve Days of Christmas'
	function entireSong(){
	var title = 'Twelve Days of Christmas' + '\n';
	var songString = '';
	for (var i=0; i <= 11; i++){
		songString += '\n' + start(i) + theTwelve(i);
		}
	return title + songString;
	}

	// start function returns the day the song is currently at with the starting lyrics for each verse
	function start(i){
	var day = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];
	var startLyrics = ['On the' + ' ' + day[i] + ' day of Christmas' + ' \n' + 'my true love sent to me:' + '\n'];
	return startLyrics;
	}
	
	// theTwelve function returns all lyrics for each day
	function theTwelve(i){
		var theTwelve = ['and a Partridge in a Pear Tree', '2 Turtle Doves',  '3 French Hens', '4 Calling Birds', '5 Golden Rings', '6 Geese a Laying', '7 Swans a Swimming', '8 Maids a Milking', '9 Ladies Dancing', '10 Lords a Leaping', '11 Pipers Piping',];      	
		var theTwelveString = '';
    if (i === 0){ 
      theTwelve[0] = 'A Partridge in a Pear Tree';
    }
    for (var j=i; j>=0; j--)
			theTwelveString += theTwelve[j] + '\n';
		return theTwelveString;
	}
	// set song = the function return value
	var song = entireSong();
	// display results
	console.log(song)
	
4a)	// Returns true if a and b are true and false if either a or b are false
	function and2(a,b){
		return a ? (b ? true : false) : false;
	}
	and2(1,4);
	and2('x'/2, 2);	
	}

		
4b)	
	function and2(a,b){
	return a ? (b ? true : false) : false;
	}
	// Returns true if a, b, and c are true and false if any of a, b, b are false by calling and2 function to get truth about a and b then compare against c
	function and3(a,b,c){
		return and2(a,b)? (c ? true : false) : false;
	}
	and3(1,3,4); // true
	and3(1, 2<1, 4); // false
	and3(0<-1, 1,4); // false
	and3(1, 2, 4<3); // false
	
4c)
	// Function compareArray returns truth comparisons for any number of inputs via an array.
	var compareArray = [1,2,4,5,6];
	function andN(compareArray){
		if (compareArray.length === 0)
			return 0;
		else if (compareArray.length ===1)
			return compareArray[0] == true;
		else{
			var truth = true;
				for (i=0; i <= (compareArray.length -1); i++){
						truth = truth ? (compareArray[i] ? true : false) : false;
				}
			}
		return truth;
	}
	var truth = andN(compareArray);
	console.log(truth);
	
4d)
	The function in 4c does not represent all comparisons of &&.  Some of these return values such as NaN, undefined, and empty string
	e.g.
	NaN && true;  //returns NaN
	undefied && 0; //returns undefined
	'string' && ' '; //returns " "
	
5a)	// setCards function creates an array of cards like Ace Of Hearts, Ace of Diamonds... 
	var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
	var ranks = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
	function setCards(suits, ranks){
		var card = [];
		for (i = 0; i < ranks.length; i++){
			var rank = ranks[i];
			for (j=0; j < suits.length; j++) {
				card.push(rank + ' of ' + suits[j]);
			}
		}
		return card;
	}
	var cards = setCards(suits, ranks);
	console.log(cards);
	 
	 // Function rank takes an id and returns the rank of the card 1-13 where ace is low and king is high(13)
	function rank(id){
		var rankCard;
			rankCard = Math.ceil(id/4);	
	return rankCard;
	}
	var cardRank = rank(51);
	console.log(cardRank);

	// Function Suit takes a card ID and returns its suit
	function suit(id){
			
		var suitCard;
		suitCard = Math.floor((id)/13) +1;
	
	return suitCard;
	}
	var cardSuit = suit(25);
	console.log(cardSuit);
	
	
	// Function color takes card id and returns its color
	function color(id){
		var cardColor;
		if (id == 0 || id == 1){
			cardColor = 'red';
		}
		else if (id % 4 == 0 || id % 4 == 1){
			cardColor = 'red';
		}
		else{
			cardColor = 'black';
		}
		
	return cardColor;
	}
	var cardColor = color(6);
	console.log(cardColor);
	
	// Function name takes a card id and returns its name ('Ace of Spades' for example)
	function name(id){
		var cardName;
		cardName = cards[id];
		return cardName;
	}
	var NameOfCard = name(51);
	console.log(NameOfCard);
	
	// Function cardID returns rank and suit of a card from a given ID
	function cardID(rank, suit){
		var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
		var ranks = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
		var suitOfCard = (suit);
		var rankOfCard = (rank) * 4;
		var cardRankSuit = (suitOfCard + rankOfCard);
		return cardRankSuit;
		
	}
	var cardsRankAndSuit = cardID(12,2);
	console.log(cardsRankAndSuit);