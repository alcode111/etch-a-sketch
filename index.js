const gridContainer = document.getElementById("grid-container")
const newGridBtn = document.getElementById("new-grid-btn")
const clearGridBtn = document.getElementById("clear-grid-btn")

let squares = []

newGridBtn.addEventListener('click', function() {
    const gridNumberPrompt = prompt("Please select a grid number between 1 and 100.")
    let userInput = parseInt(gridNumberPrompt)

    function removeGrid() {
        gridContainer.innerHTML = ""
    }

    if (!isNaN(userInput) && userInput > 0 && userInput < 100) {
        removeGrid()
        createGrid(userInput)
    } else {
        alert("Invalid input. Please enter a valid number between 1 and 100.")
    }
})

clearGridBtn.addEventListener('click', function() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.remove("square-bg")
    }
})

function createGrid(userInput) {
    for (let i = 0; i < userInput; i++) {
        const row = document.createElement("div")

        for (let j = 0; j < userInput; j++) {
            const square = document.createElement("div")
            square.classList.add("square")
            squares.push(square)

            //Game logic on mouseover
            square.addEventListener('mouseover', function() {
                square.classList.add("square-bg")
            })
            row.append(square)
        }
        gridContainer.append(row)
    }
}

createGrid(16)

