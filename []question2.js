// **2)** _(Moderate, 10%)_

// Rewrite each block below as the simplest equivalent you can discover.  Your equivalent should produce the same final conditions as the original code given the same initial conditions.
// In each case, if there is an undeclared variable, assume it has been declared earlier and set to an unknown value.

// []**a)**

// ```
// var i;
// if ((n - Math.floor(n)) >= .5) {
//   i = Math.ceil(n);
// } else {
//   i = Math.floor(n);
// }
// ```
```
var i;
if ((n - Math.floor(n) >= .5) {
  i = Math.ceil(n);
} else {
  i = Math.floor(n);
}
```

// solution
var i = Math.round(n);
// !!can search the math object for different tools


// []**b)**
// ```
// var y, xIsFalse = (x? false : true);
// if (xIsFalse)
//   y = false;
// else
//   y = x;
// ```
```
var y, xIsFalse = (x? false : true);
if (xIsFalse)
  y = false;
else
  y = x;
```
// Solutions:

var y = (x? x: false);
OR
// ??what does the ? mean?
// !!Ternary opertor. It has the form of: condition ? value-if-true : value-if-false
// The comma operator evaluates both of its operands (from left to right) and returns the value of the second operand.

var y = x || false;


// []**c)**
// ```
// for (var count = 15 - i ; count < 15 ; count=count+1) {
//   i = i-1;
//   console.log(i+1)
// }
// ```

```
for (var count = 15 - i ; count < 15 ; count=count+1) {
  i = i-1;
  console.log(i+1)
}
```

// Solutions:

for ( ; i>0; i--) {
    console.log(i);
}
OR

while (i>0) {
      console.log(i);
      i--;
}
OR

while (i>0) {
      console.log(i--);
}


// []**d)**
// ```
// var x;
// if (a) {
//   if (b) {
//     x = 0;
//   } else {
//     x = 1;
//   }
// } else {
//   if (b) {
//     x = 1;
//   } else {
//     x = 2;
//   }
// }
// ```
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
```

// Solution
a)

Original:

var i;
if ((n - Math.floor(n)) >= .5) {
   i = Math.ceil(n);
} else {
  i = Math.floor(n);
}
Solution:

var i = Math.round(n);
b)

Original:

var y, xIsFalse = (x? false : true);
if (xIsFalse)
   y = false;
else
   y = x;
Solutions:

var y = (x? x: false);
OR

var y = x || false;
c)

Original:

for (var count = 15 - i ; count < 15 ; count=count+1) {
    i = i-1;
    console.log(i+1)
}
Solutions:

for ( ; i>0; i--) {
    console.log(i);
}
OR

while (i>0) {
      console.log(i);
      i--;
}
OR

while (i>0) {
      console.log(i--);
}
d)

Original:

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
Solutions:

var x;
if (a && b) {
   x = 0;
} else if (a || b) {
  x = 1;
} else {
  x = 2;
}
OR

var x = (a && b)? 0: ((a||b)? 1: 2);
OR

var x = 0;
if (!a) x++;
if (!b) x++;
OR

var x = (a? 0: 1) + (b? 0: 1);
OR

var x = (!a*1) + (!b*1);
OR

var x = !a + !b;
A brief explanation of the last two solutions: whatever value a starts with, !a will be the opposite boolean, and that will be coerced (auto-converted) to either 0 or 1 by the numeric operation (!a*1) or merely the addition (boolean + boolean). An initially falsish a will produce 1 and truish a will produce 0, likewise with b, so the sum x is the number of falsish inputs.
