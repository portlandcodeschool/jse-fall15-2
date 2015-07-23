**4)** _(Difficult, 20%)_

Suppose the '&' key on your keyboard is missing, and you want to be able to continue programming without it.  You decide to simulate the && operator with a function!

**a)**
Write a function `and2(a,b)` which tries to simulate the && operator: it should always return the same result as `(a && b)` for any values of _a_ and _b_.  (For example, `and2((0>1),true)` should return _false_.)  But you can't use && itself within your function!

**b)** Write another function `and3(a,b,c)` which tries to simulate a double-&& operator: it should always return the same result as `(a && b && c)` for any values of a,b,c.  (For example, `and3((1>0),(0>1),true)` should return _false_.)  As before, you're not allowed to use && itself. Remember that you can call functions from functions!

**c)**
Now generalize your function to handle any number of values.  You will learn better ways eventually, but for now use an array to store all the values.
Your new function `andN(values)` should accept one parameter _values_, which is an array holding all the values to && together.
If the argument you provide when calling the function holds values [a,b,c...z], as in
`andN([a,b,c...z])`, the function should return the same result as the expression `(a && b && c && ... z)`.
Make sure to handle two special cases: length 0 (then return _true_) and length 1 (then return that single value).
Again, don't use &&.

**d)**
You've just realized that your effort was doomed: neither of your functions can replace the && operator in certain circumstances.  Explain why, and find an example which demonstrates failure.
