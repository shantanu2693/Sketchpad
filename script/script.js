let userInput = 16;

const theButton = document.querySelector("#btn");
theButton.addEventListener("click",clickFunction);

function clickFunction() {
    let userInput = window.prompt("What size grid do you want (x*x)?","16");
    userInput = Number(userInput);
    if ((Number.isInteger(userInput)) && (userInput > 0)){
        
    }
    else{
        window.alert("Invalid Input");
        return;
    }
}