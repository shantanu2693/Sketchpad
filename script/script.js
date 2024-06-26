let userInput = 50;

const theButton = document.querySelector("#btn");
theButton.addEventListener("click",getUserInput);

createGrid(); //Initial grid size is 16*16 before the user decides to change it

function getUserInput() {
    

    userInput = window.prompt("What size grid do you want (x*x)? [Enter any number between 1-100]","50");
    userInput = Number(userInput);

    
    if ((Number.isInteger(userInput)) && (userInput > 0) && (userInput <= 100)){
        createGrid();
    }
    else if (userInput == ''){
        return;
    }
    else{
        window.alert("Invalid Input");
        return;
    }
}

function createGrid(){

    emptyGrid();
    
    for (i=0;i<userInput;i++){
        const newHorizontalDiv = document.createElement("div");
        const sketchpadDiv = document.querySelector(".sketchpad");

        sketchpadDiv.appendChild(newHorizontalDiv);

        newHorizontalDiv.style.border = "1px dotted gray";
        newHorizontalDiv.style.flex = "auto";
        newHorizontalDiv.style.display = "flex";

        for (j=0;j<userInput;j++){
            const newVerticalDiv = document.createElement("div");
            let opacityValue = 0.1;

            
            newHorizontalDiv.appendChild(newVerticalDiv);

            newVerticalDiv.style.border = "1px dotted gray";
            newVerticalDiv.style.flex = "auto";   
            
            newVerticalDiv.addEventListener("mouseover",() => {

                newVerticalDiv.style.backgroundColor = "black"; 
                newVerticalDiv.style.border = "1px solid black";
                newVerticalDiv.style.opacity = `${opacityValue}`;

                opacityValue += 0.1;
            });
        }
    }
}

function emptyGrid(){

    const sketchpadDiv = document.querySelector(".sketchpad");

    while (sketchpadDiv.firstChild){
        sketchpadDiv.removeChild(sketchpadDiv.lastChild);
    }
}

