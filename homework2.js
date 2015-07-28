//Section 1
//a
function fractionString(n,d){
    var n;
    var d;
    var remainder = n % d;
    var wholeNumber = ((n - remainder)/d);
    var result = wholeNumber + " " + remainder + '/' + d;
    return result;
}

console.log(fractionString(3,3));

//b
function fractionString(n,d){
    var n;
    var d;
    var remainder = n % d;
    var wholeNumber = ((n - remainder)/d);
    var result = wholeNumber + " " + remainder + '/' + d;
    var noWholeNumber = remainder + '/' + d;
    if (wholeNumber===0){
        return noWholeNumber;
    } else if (remainder===0){
        return wholeNumber;
    } else {
        return result;}
}

console.log(fractionString(4,2));

//Section 2
//a
var i = math.round(n);

//b
var y = (x? false : true);

//c
var i=15;

for (i; i>0; i--){
      console.log(i);
}

//d
if (a&&b){
    x = 0;
}else if (a||b){
    x = 1;
}else {
    x = 2;
}

//3

//a
var letter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var n;

function letterTriangle(n){
  var output = '';
  for (var line =0; line<n; line++){
    for (var col=line; col>=0; col--){
      output = output + letter[col];
    }
    output += '\n';
  }
  return output;
}

console.log(letterTriangle(5));

//b coming soon!

// Section 4

//a
function and2(a,b){
    if (a = true){
    }else if (b = true) {
        return true;
    }else {
        return false;
    }
    if (a = false){
    }else if (b = false){
      return true;
    }else {
      return false;
    }

}

//hmmm not quite working but not sure why??
//more coming soon! sorry :(








