/* Global Variables */
var colorNum = 0;

function createEtchBoard(num) {
    var etchBoardDom = document.getElementById("etch-board");
    for (let row = 0; row < num; row++) {
        let divRow = document.createElement("div");
        divRow.id = `row${row}`;
        divRow.classList.add("rows");
        for (let col = 0; col < num; col++) {
            let divCol = document.createElement("div");
            divCol.id = `row${row}col${col}`;
            divCol.classList.add("col-squares");
            divRow.appendChild(divCol);
        }
        etchBoardDom.appendChild(divRow);
    }
}

function createEventListenerOnCol(functionName, num) {
    for (let row = 0; row < num; row++) {
        for (let col = 0; col < num; col++) {
            let divCol = document.getElementById(`row${row}col${col}`);
            divCol.removeEventListener("mouseover", mouseOverErase);
            divCol.removeEventListener("mouseover", mouseOverNormal);
            divCol.removeEventListener("mouseover", mouseOverGradient);
            divCol.addEventListener("mouseover", functionName);
        }
    }
}

function clearEtch() {
    console.log("clear")
    Array.from(document.getElementsByClassName("col-squares")).forEach(col => {
        Array.from(col.classList).forEach(colClass => {
            col.style.backgroundColor = "#f7f6ea";
        })

    })
}

function mouseOverNormal() {
    this.style.backgroundColor = "#C7866A"
}

function mouseOverErase() {
    this.style.backgroundColor = "#f7f6ea";
}

function mouseOverGradient() {
    colors = ["#F5F4DA", "#F5E6CA", "#F4DBBF", "#F3D0B2", "#F4C7A9", "#F4C1A2", "#F4C7A9", "#F3D0B2",  "#F4DBBF", "#F5E6CA"]
    this.style.backgroundColor = colors[colorNum];
    colorNum++;
    if (colorNum == colors.length) colorNum = 0;
}

var buttonClear = document.getElementById("clear");
buttonClear.addEventListener("click", clearEtch);

var buttonErase = document.getElementById("erase");
buttonErase.addEventListener("click", function () {
    createEventListenerOnCol(mouseOverErase, 16)
});

var buttonNormal = document.getElementById("normal");
buttonNormal.addEventListener("click", function () {
    createEventListenerOnCol(mouseOverNormal, 16)
});

var buttonGradient = document.getElementById("gradient");
buttonGradient.addEventListener("click", function () {
    createEventListenerOnCol(mouseOverGradient, 16)
});

createEtchBoard(16);
createEventListenerOnCol(mouseOverNormal, 16);