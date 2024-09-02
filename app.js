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
    let getNumberOfRowsAndColumns = prompt("Please input a valid integer between 1 to 100 for the number of squares you want for columns and rows.");
    if (getNumberOfRowsAndColumns > 100) {
        alert("Invalid input: The number requested is greater than 100")
    } else if (getNumberOfRowsAndColumns <= 100 && getNumberOfRowsAndColumns > 0) {
        container.innerHTML = "";
        createGrid(getNumberOfRowsAndColumns);
    } else if (getNumberOfRowsAndColumns <= 0) {
        alert("Invalid input: The number requested is 0 or is less than 0")
    } else {
        alert("Invalid input: Please input a valid integer between 1 to 100")
    }
}


createGrid(sizeOfGrid)
