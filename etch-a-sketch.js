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
            divCol.addEventListener("mouseover", mouseOverNormal);
        }
    }
}

function mouseOverNormal() {
    this.style.backgroundColor = "#C7866A"
}

createEtchBoard(16);
createEventListenerOnCol(mouseOverNormal, 16);