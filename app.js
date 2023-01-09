var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with the server! Try again later");
}

function clickHandler(){
    //taking input
    var inputText = txtInput.value;

    //calling server for processing and pring output on screen
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => { 
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click",  clickHandler)