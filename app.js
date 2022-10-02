// console.log("Hello form app.js");
var btnTranslate = document.querySelector("#btn-translate"); //reference to the button
var textInput = document.querySelector("#text-input");

console.log(textInput);
console.log("input", textInput.value);


function clickEventHandler(){
    console.log("Button clicked!!!");  //adding function to the button using click listener
};

btnTranslate.addEventListener("click", clickEventHandler()); //calling back function


