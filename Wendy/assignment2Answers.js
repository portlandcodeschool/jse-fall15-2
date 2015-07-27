Question 1A.

function fractionString(n,d) 
{
	var a = Math.floor(n/d);
	var b = (n-(d*a));
	return a + ' ' + b + '/' + d;
}
console.log (fractionString(7,4));

Question 1B.

function fractionString(n,d) {

  var a = Math.floor(n/d);  //gives the whole number.  
  var b = (n-(d*a)); // gives the number that will be the new numerator in the smaller fraction
  var c = (n%d); //provides a check to see if the fraction is actually a whole number. 
  
  	if (c===0) { //This prevents the fraction with 0 as the numerator.
  	return a;
  }
  
  if (a > 0) { //This is the main outcome-turning improper fraction into proper fraction.
		return a + ' ' + b + '/' + d;
		}
	

	else { // This is if you already have a proper fraction (i.e. numerator < denominator)
		return n + '/' + d;
		}
}
console.log(fractionString(n,d));

// fractionString(8,4);
// fractionString(7,4);
// fractionString(5,10);

Question 2.

2a.

ORIGINAL:
var i;
if ((n - Math.floor(n)) >= .5) {
  i = Math.ceil(n);
} else {
  i = Math.floor(n);
}

//Math.ceil returns the smallest integer greater than or equal to the given number.  eg. 2.4 = 3;
//Math.floor returns the smalelst integer less than or equal to the given number.  eg. 2.4 = 2;
//for my own purposes, setting var i =6;
// ORIGINAL WITH WORKING NUMBERS:
// var i;
// var n = 3.2;
// if((3.2- 3))>= .5 {
// 	i = 4;
// }
// else {
// 	i = 3;
// }

//In other words, we are rounding up.  
2a. ANSWER:
var i;
i = Math.round(n);

2b.  

ORIGINAL:
var y, Banana = (x? false : true);//Does x evaluate to true?  then answer will be false.
if (Banana) // value of x is false 
  y = false
else // if xIsFalse value is false:
  y = x

//This is so many double negatives... I replaced "xIsFalse" with Banana in my tests.  
//Ternary operator:  points to remember, if the value on the left of the ? is TRUE, then the value in the  middle is chosen.  
//if it is FALSE, the value on the right is chosen.  
// Also of note is that the value of xIsFalse will change depending on what the value of x is.

2b. Option 1:
//It seems that if x is true, y is also true and if x is false, y is also false.
var y, x;
y = x;

2b. Option 2:
//write it in ternary expression...I wasn't sure if y'all wanted it to stay as a ternary operator.
y = (x? y=false: y=x)

ORIGINAL:
2c.  
for (var count = 15 - i; count < 15; count = count + 1) {
	i = i-1;
	console.log(i+1)//this doesn't alter the for loop--it's a result.
}

2c. My Solution:
for (var i = 14; i > 0; i--){
  console.log(i);
}


ORIGINAL:
2d.  

}
```
**d)**
```
var x;
if (a) {
  if (b) {
    x = 0;
  } else {
    x = 1;
  }
} else {
  if (b) {
    x = 1;
  } else {
    x = 2;
  }
}

2d. My Solution:
if (a&&!b)||(b&&!a) {
    x=1;
  }
  else if (a&&b) {
    x=0;
  }
  else if (!a&&!b){
    x=2;
  }

 
PROBLEM 3. 
var letterArray=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


function letterTriangle(n) {
  var output= '';
  for (var line = 0; line<n ; line++) { 
      //defines how many times we do this line//
    for ( var letter= line; letter>=0; letter--) {
        //single step is going to be n * n times//
            output= output + letterArray[letter];
    }
    output +='\n';
  }
return output;
}
console.log(letterTriangle(4));


PROBLEM 3B. 
var gifts= ['a Partridge in a Pear Tree', 'Two Turtle Doves and', 'Three French Hens', 'Four Calling Birds', 'Five Gold Rings', 'Six Geese a Laying'];
var day = ['On the first', 'On the second', 'On the third', 'On the fourth', 'On the fifth', 'On the sixth'];
// var output= '';
  
function twelveDays(n) {
  var output='';  
    for ( var line = n; line>=0; line--) {//1.  for loop to show how many times we do the line.
      for (var verse= 0; verse<=line; verse++ ) {
         
         output = '\n' + gifts[verse] + output;
          
      }
    // output = output + ' day of Christmas my true love gave to me ' + '\n' + day[line];
    output = '\n' + day[line] + ' day of Christmas my true love gave to me: ' +  output + '\n';
    }
  return output;
}
console.log(twelveDays(6));


PROBLEM 4a.

function and2(a,b) {
var result = '';

if (a) {
  if (b) {
  result= true;
  }
}
else {
  result= false;
}


return result;
}

console.log(and2(10<6, true));

4b. SOLVING without a nested func.

function and3(a,b,c) {
var result = '';

if (a) {  //if a is true, check to see if b is true.
  if (b) { 
    if (c) {  
    result= true;
    }
  }
}//if b is true, check to c if c is true, if it is, then return true.  Otherwise return false.
else {
  result= false;
}

return result;
}

console.log(and3((6<3), false, true));

4b. Solving attempt with nested func.

var result = '';

function and2(a,b) {


      if (a) {
          if (b) {
          result= true;
          }
      }
      else {
        result= false;
      }

    return result;
    }
    console.log(result);//just checking to see if my inner loop was working//



function and3(a,b,c){
  var result = '';

  
  if (c) {
    if (and2) {
      return true;
    }
  else {
    return false;
    }
  }

  return result;
  console.log('bon jour');
}

console.log(and3(false, true, true));

4c.  //Didn't get a chance to work on this. ):
4d.  //Ditto.

5.// Going to try to tackle this and submit tomorrow.  Sorry.


