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

    container.style.display = "flex";
}

function styleCells() {
    const cells = document.querySelectorAll(".cell")
    cells.forEach((cell) => {
        cell.style.border = "3px solid black";
        cell.style.width = "100px";
        cell.style.height = "100px";
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

function main() {
    initializeDivs(10);
    styleCells();
    addCellEvents();
}

main();