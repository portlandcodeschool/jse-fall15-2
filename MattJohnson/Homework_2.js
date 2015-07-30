Homework 2

1a.	function fractionString (n,d) {
	return Math.floor(n / d) + " " + n % d + "/" + d
	}
	fractionString(7,5)

1b.	function fractionString (n,d) {
	var propFrac = "";
	if (Math.floor(n / d) == 0 && (n % d) > 0)
		{
		return n % d + "/" + d
		}
	else if (n % d == 0) {
		return Math.floor(n / d)
	}
	else {
		return Math.floor(n / d) + " " + n % d + "/" + d
		 }
	}
	fractionString(8,4)

2a.	var i = Math.round(n)
2b.	var y = (x? false : true) ? false : x;
2c.	var count = 15 - i;
	while (count < 15) {
		count = count + 1;
		console.log(i);
		i = (i-1);
	}
2d.