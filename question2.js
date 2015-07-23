**2)** _(Moderate, 10%)_

Rewrite each block below as the simplest equivalent you can discover.  Your equivalent should produce the same final conditions as the original code given the same initial conditions.
In each case, if there is an undeclared variable, assume it has been declared earlier and set to an unknown value.

**a)**

```
var i;
if ((n - Math.floor(n)) >= .5) {
  i = Math.ceil(n);
} else {
  i = Math.floor(n);
}
```


**b)**
```
var y, xIsFalse = (x? false : true);
if (xIsFalse)
  y = false;
else
  y = x;
```


**c)**
```
for (var count = 15 - i ; count < 15 ; count=count+1) {
  i = i-1;
  console.log(i+1)
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
```
