**3)** _(Moderate, 25%)_

**a)**
Write a function `letterTriangle(n)` which returns a single string as follows:

- the function receives a parameter `n`, an integer from 1 to 26;
- the output string will have `n` lines, each ending in a newline ('\n') character;
- the first line of the string is always 'A';
- each line will be a sequence of letters, going backward from some starting letter to 'A';
- each line starts one letter after the previous line's start.

As an example, the result of `letterTriangle(4)` will look like this when printed:
```
A
BA
CBA
DCBA
```

**b)**
Adapting your solution to part a), write a function which returns a string containing the entire lyrics for the song "The Twelve Days of Christmas".  Make sure that your result is grammatically and typographically correct (include line breaks, commas, etc. where needed), but keep redundancy within your program to a minimum.  Don't just `console.log()` each line; as before, return them together as a single string which includes a '\n' at each line break.
You may want to use helper functions, loops, and/or arrays to store repeated elements.

If you prefer a non-Christmas option, you may choose a different song with similarly repeating structure, such as "There was an Old Woman Who Swallowed a Fly".  If you prefer a vegan option, you may write your own cruelty-free song.
