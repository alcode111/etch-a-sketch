const gridContainer = document.getElementById("grid-container")
const newGridBtn = document.getElementById("new-grid-btn")
const clearGridBtn = document.getElementById("clear-grid-btn")

function clearGrid() {
    gridContainer.innerHTML = ""
}

newGridBtn.addEventListener('click', function() {
    const gridNumberPrompt = prompt("Please select a grid number between 1 and 100.")
    let userInput = parseInt(gridNumberPrompt)

    if (!isNaN(userInput) && userInput > 0 && userInput < 100) {
        clearGrid()
        createGrid(userInput)
    } else {
        alert("Invalid input. Please enter a valid number between 1 and 100.")
    }
})

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