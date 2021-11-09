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

createEtchBoard(16);