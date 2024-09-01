sizeOfGrid = 16;

const container = document.querySelector('.container')
const resetButton = document.querySelector('button')

const createGrid = (amountOfGrids) => {
    //making a loop to make the rows
    for (i = 0; i < amountOfGrids; i++) {
            // row makes a div
            const row = document.createElement('div');
            row.classList.add('gridRow')

            //making a loop so that the rows have columns
            for (j= 0; j < amountOfGrids; j++) {
            // column makes a div
            const square = document.createElement('div');
            square.classList.add('gridSquares')
            square.addEventListener('mouseover', () => {
                square.classList.remove('gridSquares')
                square.classList.add('hover')
            });
            row.appendChild(square)
        }

        container.appendChild(row)
    }

}

function gridResizePrompt(){
    let getNumberOfRowsAndColumns = prompt("Please provide a number between 1 to 100");
    let validationChecker = parseInt.getNumberOfRowsAndColumns;
    console.log(validationChecker)
    if (validationChecker === undefined) {
        alert("Invalid input: Please input a valid integer between 1 to 100")
    }else if (getNumberOfRowsAndColumns > 100) {
        alert("Invalid input: The number requested is greater than 100")
    } else if (getNumberOfRowsAndColumns <= 100 && getNumberOfRowsAndColumns > 0) {
        console.log("Correct!")
    } else {
        alert("Invalid input: The number requested is less than 0")
    }
}


createGrid(sizeOfGrid)
