//STACKS
//FUNCTIONS OF A STACKS
var letters =[];        //stack
var word = "racecar"
var rword=" ";
//put letters of words into stack
for (var i = 0;  i < word.length; i++){
        letters.push(word[i]);
}

//pop off the stack in reverse order
for (var i =0; i<word.length; i++){
        rword+= letters.pop();
}

if (rword ===word){ 
        console.log(word + "is a palindrome.");
}
else {
        console.log(word + "is a palindrome")

}

//creating a new stack
var myStack =newStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());