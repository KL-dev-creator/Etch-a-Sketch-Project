let sizeOfGrid = 16;
let rgbToggleValidation;

const container = document.querySelector('.container')
const resetButton = document.querySelector('button')

const createRGBValue = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return {red, green, blue}
}


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
            const squareDimensions = 960 / sizeOfGrid
            square.style.height = `${squareDimensions}px`
            square.style.width = `${squareDimensions}px`

            square.addEventListener('mouseover', () => {
                if (rgbToggleValidation == true) {
                    const {red, green, blue} = createRGBValue()
                    console.log(red, green, blue)
                    const randomBackgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
                    square.style.background = randomBackgroundColor;
                } else {
                    const blackBackgroundColor = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
                    square.style.background = blackBackgroundColor; 
                }
            });
            row.appendChild(square)
        }
        container.appendChild(row)
    }

}

function gridResizePrompt() {
    let getNumberOfRowsAndColumns = prompt("Please input a valid integer between 1 to 100 for the number of squares you want for columns and rows.");
    if (getNumberOfRowsAndColumns > 100) {
        alert("Invalid input: The number requested is greater than 100")
    } else if (getNumberOfRowsAndColumns <= 100 && getNumberOfRowsAndColumns > 0) {
        container.innerHTML = "";
        sizeOfGrid = getNumberOfRowsAndColumns
        createGrid(sizeOfGrid);
    } else if (getNumberOfRowsAndColumns <= 0) {
        alert("Invalid input: The number requested is 0 or is less than 0")
    } else {
        alert("Invalid input: Please input a valid integer between 1 to 100")
    }
}

function randomColorMode()  {
    let rgbToggle = document.getElementById("randomizeColorMode");
    if (rgbToggle.innerText == "Random Color Mode : OFF") {
        rgbToggle.innerText = "Random Color Mode : ON";
        rgbToggleValidation = true;
        console.log(rgbToggleValidation)
        }   else {
            rgbToggle.innerText = "Random Color Mode : OFF";
            rgbToggleValidation = false;
            console.log(rgbToggleValidation)
        }   
} 



createGrid(sizeOfGrid)
