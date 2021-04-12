# A Regex for URL Address Verification 

Quick rundown of how a Url Regex works.
## Summary

Ill be using the following Regex for Urls and breaking down and describing whats happening.

>``/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/``

## Table of Contents

- [Anchors](#anchors)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [Quantifiers](#quantifiers)
- [Grouping and Capturing](#grouping-and-capturing)



## Regex Components
------
### Anchors
#### The Anchors on a Regex is where the Search String starts and ends.  
#### Using the following code
> ``/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/``
>
>  ``^`` marks the start of the string                          ``$`` signals its the end of the Search String



----------------

### Bracket Expressions

#### Using the following code
> ``/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/``
>

We can see 3 ``[ ]`` bracket expressions .
``[\da-z\.-]``   ``[a-z\.]`` ``[\/\w \.-]``

 This is what contains our character classes we are looking for. Then allows us to add extra search patterns based off of those classes.

---------

### Character Classes

#### Using the following code
> ``/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/``
>

 For the first part ``[\da-z\.-]`` its trying to match ``\d`` , any digit, with any character from ``a`` to ``z``. It also includes ``\.-`` which will search for a ``.`` ``-``   

 This would be similar to ``[a-z0-9\.-]`` searching from ``a`` through ``z`` And also searching digits ``0`` through ``9``

 Which if used on this website url it would be the selected parts in each string  
> /^(https?:\/\/)?``([\da-z\.-]+)``\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
> 
> https://``courses.bootcampspot``.com/courses/467/assignments/7207
-----

### Quantifiers
These are used to deterimine how far to search or at what range
#### Using the following code
> ``/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/``
>
> **The ``{2,6}`` is a quantifier at the end of the ``.([a-z\.]{2,6})``**

This is right here is setting the length for what would be a `` .com  .net   .org``

It tells us it can only be ``2 to 6``  characters long.

This code also has a few ``*`` that tell it to search for as many as possible of the contained group and class.

------

### Grouping and Capturing


>

Like in the previous topic will take that same section and break it down
> ``\.([a-z\.]{2,6})``

Its telling us that it needs to find its to figure out its letters needed ``[a-z\.]`` and at what length ``{2,6}`` before it can move onto the next grouping which would be 
> ``([\/\w \.-]*)``
>
> /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})``([\/\w \.-]*)``*\/?$/

This particular url has 4 groups that it puts into an classical array that will give us access to the index for each result.



----

## How might you use a Regex Url in your project?

  I could use a Greedy to shorten up data im bring back too. A Greedy is going to bring back everything after your regex params.
   
   For example this: 

   >   ``\=.*`` 

   Used on this:

   >https://www.youtube.com/watch?v=esX7SFtEjHg

   Will bring back everthing after the = like so:

   >esX7SFtEjHg

Which could make it easier to store. Or if that was instead the name of a movie in a movie database search I would have the name. 

----
## Author

My name is Adam, I hope you enjoyed our dive into how Regex on a Url behaves. Send me an email if you have questions or suggestions.
 aramosatwork@hotmail.com