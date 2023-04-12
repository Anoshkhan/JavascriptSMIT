// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

// function sum_of(value1) {
//     return function(value2) {
//       return value1 + value2;
//     }
//   }
//   let callFunc = sum_of(4);
//   console.log(callFunc(5));  
    
// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

// function searchArray(myName, value) {

//   if (myName.length === 0) {
//     return false;
//   }

//   if (myName[0] === value) {
//     return true;
//   }
  
//   else {
//     return searchArray(myName.slice(1), value);
//   }
// }

//   let myName = ["A", "N", "O", "S", "H"];
// console.log(searchArray(myName, "P"));  // return false
// console.log(searchArray(myName, "S"));  // return true



// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

// function changeListItems(items){
//   document.querySelector('li');
//   return items;
// }
// let new_list = changeListItems("Javascript");
// console.log(new_list);

// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.


function backgroundColor(element, color) {
  element.style.backgroundColor = color;
} 

const myElement = document.querySelector('ul');
backgroundColor(myElement, 'red');

