# Challenge Summary
Write a function that takes in a string with brackets and validates if the brackets are correctly balanced. The function should return a boolean result - true if the brackets are balanced, false if they are not.

## Whiteboard Process
![stack-queue-brackets](./stack-queue-brackets.png)

## Approach & Efficiency
We are looking to create function validateBrackets that takes a string as an argument.
The function will return boolean based upon whether brackets in string are 'balanced'.
Have a function create a stack.
We will the create two arrays, one for open end of brackets and one for closed end of brackets.
We then create a for loop based upon length of argument.
There is then a nested if loop that checks if node has bracket present comparing to openArray.
If it is found, check for corresponding closing bracket using closedArray.
If the correct closing bracket is located in the strinkg, return true, else return false.

## Solution

// Only have about the first have so far

function validateBrackets (string) {
 let openArray = [ '[', '(', '{'];
 let closedArray = [ ']', ')', '}' ];

 let stack = new Stack();


 for (let i = 0; i < string.length; i++){
  let x = string[i];

  if(x == openArray[0] || x == openArray[1] || x == openArray[2]) {
  stack.push(x) }
   else { i++ }
