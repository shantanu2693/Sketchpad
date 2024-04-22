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
            
            newHorizontalDiv.appendChild(newVerticalDiv);

            newVerticalDiv.style.border = "1px dotted gray";
            newVerticalDiv.style.flex = "auto";   
            
            newVerticalDiv.addEventListener("mouseover",() => {
                newVerticalDiv.classList.add("hovered");

                let x = parseInt(Math.random()*256);
                let y = parseInt(Math.random()*256);
                let z = parseInt(Math.random()*256);

                newVerticalDiv.style.backgroundColor = `rgb(${x},${y},${z})`; 
                newVerticalDiv.style.border = "1px solid black";
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

