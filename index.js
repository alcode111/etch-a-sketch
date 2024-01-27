const gridContainer = document.getElementById("grid-container")
const newGridBtn = document.getElementById("new-grid-btn")
const clearGridBtn = document.getElementById("clear-grid-btn")

function createGrid(userInput) {
    for (let i = 0; i < userInput; i++) {
        const row = document.createElement("div")

        for (let j = 0; j < userInput; j++) {
            const square = document.createElement("div")
            square.classList.add("square")
            row.append(square)
        }
        gridContainer.append(row)
    }
}

createGrid(16)