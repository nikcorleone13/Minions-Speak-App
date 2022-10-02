// console.log("Hello form app.js");
var btnTranslate = document.querySelector("#btn-translate"); //reference to the button
var textInput = document.querySelector("#text-input");
var outputDiv  = document.querySelector("#output");



function clickEventHandler(){
    outputDiv.innerText = "asasasasasasas" + textInput.value;

    // console.log("Button clicked!!!");  //adding function to the button using click listener
    // // console.log(textInput);
    // console.log("input-->", textInput.value);
};

btnTranslate.addEventListener("click", clickEventHandler); //calling back function


