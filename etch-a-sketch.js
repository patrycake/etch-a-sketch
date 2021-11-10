/* Global Variables */
var colorNum = 0;
var slider = document.getElementById("myRange");
var num = slider.value;

function createEtchBoard(num) {
    var etchBoardDom = document.getElementById("etch-board");
    etchBoardDom.innerHTML = "";
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
    createEventListenerOnCol(mouseOverNormal, num);
    document.getElementById(`row${0}col${0}`).classList.add("square-round-top-left");
    document.getElementById(`row${0}col${num-1}`).classList.add("square-round-top-right");
    document.getElementById(`row${num-1}col${0}`).classList.add("square-round-bottom-left");
    document.getElementById(`row${num-1}col${num-1}`).classList.add("square-round-bottom-right");
}

function createEventListenerOnCol(functionName, num) {
    console.log("list: " + num)
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

slider.oninput = function () {
    clearEtch();
    console.log("slider" + this.value)
    createEtchBoard(this.value);
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
    createEventListenerOnCol(mouseOverErase, slider.value)
});

var buttonNormal = document.getElementById("normal");
buttonNormal.addEventListener("click", function () {
    createEventListenerOnCol(mouseOverNormal, slider.value)
});

var buttonGradient = document.getElementById("gradient");
buttonGradient.addEventListener("click", function () {
    console.log("GBut: " + slider.value)
    createEventListenerOnCol(mouseOverGradient, slider.value)
});

createEtchBoard(num);
