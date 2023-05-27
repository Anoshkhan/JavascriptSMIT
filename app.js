// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.
function add(num){
    return function(){
        console.log(num + 5);
    }
}
let numAdd = add(89);
numAdd();

// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.
let nums = [1,6,3,7,4,5,8,9];
let no = +prompt("Enter a roll num you want to search");
let filteredNum = nums.filter(function(val){
    if(val === no){
        return true;
    }
    else{
        return false;
    }
});
console.log(filteredNum);


// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.
function addPara(para){
    let paragraphElement = document.createElement('p');
    paragraphElement.innerText = para;
    document.body.appendChild(paragraphElement);
}
addPara("Hello this is Anosh");


// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.
let list = document.querySelector("ul");
function newListItem(newLi){
    let newItem = document.createElement('li');
    newItem.innerText = newLi;
    list.appendChild(newItem);
}
newListItem("Strawberry");
newListItem("Melon");


// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.
let element = document.querySelector("#my-para");
function changeColor(element,color){
    element.style.color = color;
}
changeColor(element,"red");


