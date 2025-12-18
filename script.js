function styleContainer() {
    const container = document.querySelector("#container");
    
    container.style.width = "400px";
    container.style.height = "400px";
    container.style.border = "2px solid black";

    container.style.display = "flex";
    container.style.flexDirection = "column"
    
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.marginTop = "15px";
}

function initializeDivs(gridSize) {
    const container = document.querySelector("#container");

    const rows = []
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        rows.push(row);
    }

    rows.forEach((row) => {
        for (let i = 0; i < gridSize; i++) {
            const col = document.createElement("div");
            col.setAttribute("class", "cell");
            row.appendChild(col);
        }
        container.appendChild(row);
    });
}

function styleRows() {
    const rows = document.querySelectorAll(".row")
    rows.forEach((row) => {
       row.style.display = "flex";
       row.style.flex = "1"
       row.style.width = "100%"
    });
}

function styleCells() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.flex = "1";
        cell.style.boxSizing = "border-box";
    });
}

function addCellEvents() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        })
    });
}

function addButtonListener() {
    const button = document.querySelector("#generate");

    button.addEventListener("click", () => {
        const sizeText = document.querySelector("#size");
        const sizeNum = parseInt(sizeText.value);

        if (!isNaN(sizeNum) &&
            sizeNum >= 1 && sizeNum <= 100
        ) {
            destroyCanvas();
            initializeCanvas(sizeNum);
        }
    });
    console.log("ran!")
}

function destroyCanvas() {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        row.remove();
    });
}

function initializeCanvas(size) {
    initializeDivs(size);
    styleRows();
    styleCells();
    addCellEvents();
}

function main() {
    styleContainer();
    initializeCanvas(100);
    addButtonListener();
}

main();