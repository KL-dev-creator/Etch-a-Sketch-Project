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


createGrid(sizeOfGrid)
