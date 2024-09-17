let sizeOfGrid = 16;
let rgbToggleValidation = false;
let proDarkToggleValidation = false;

const container = document.querySelector('.container')
const resetButton = document.querySelector('button')

// making a constant to create random values for RGB generation
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
            // each square auto-adjusts their size based on number of rows and columns
            const squareDimensions = 960 / sizeOfGrid
            square.style.height = `${squareDimensions}px`
            square.style.width = `${squareDimensions}px`
            // const from earlier gives each square an RGB value
            const {red, green, blue} = createRGBValue()
            let backgroundOpacityCounter = 0;
            let backgroundOpacity = 0;

            square.addEventListener('mouseover', () => {
                    if (rgbToggleValidation == true) {
                        if (proDarkToggleValidation == false) {
                            // if rgb is instant then opacity will be one immediately
                            const randomBackgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
                            square.style.background = randomBackgroundColor;

                            square.style.opacity == 1;    
                        } else if (proDarkToggleValidation == true) {
                            backgroundOpacity += 0.1;
                            backgroundOpacityCounter += 1;
                            square.style.opacity = backgroundOpacity

                            const randomBackgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
                            square.style.background = randomBackgroundColor;
                        } else  {

                        }

                    } else if (rgbToggleValidation == false) {
                        if (proDarkToggleValidation == false) {
                            // if black is instant then opacity will be 1 instantly

                            const blackBackgroundColor = "rgb(0 , 0, 0)";
                            square.style.background = blackBackgroundColor;
                            backgroundOpacity == 1;
                        } else if (proDarkToggleValidation == true) {
                            if (backgroundOpacityCounter < 10) {
                                backgroundOpacity += 0.1;
                                backgroundOpacityCounter += 1;
                                square.style.opacity = backgroundOpacity
    
                                const blackBackgroundColor = "rgb(0 , 0, 0)";
                                square.style.background = blackBackgroundColor;
                            } else {

                            }
                        }
                    }  
            });
            // each square of a column will be appended to the row
            row.appendChild(square)
        }
        // each row will be appended to the container
        container.appendChild(row)
    }
}

function gridResizePrompt() {
    let getNumberOfRowsAndColumns = prompt("Please input a valid integer between 1 to 100 for the number of squares you want for columns and rows.");
    if (getNumberOfRowsAndColumns > 100) {
        alert("Invalid input: The number requested is greater than 100")
    } else if (getNumberOfRowsAndColumns <= 100 && getNumberOfRowsAndColumns > 0) {
        // promps user for value and if value is valied it changes the size of the grid by the prompted value
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
    // if the button text says off then pressing it will change it to on and give a true value to rgbvalidation
    if (rgbToggle.innerText == "Random Color Mode : OFF") {
        rgbToggle.innerText = "Random Color Mode : ON";
        rgbToggleValidation = true;
        }   else {
                // if the button text says on then pressing it will change it to off and give a false value to rgbvalidation
            rgbToggle.innerText = "Random Color Mode : OFF";
            rgbToggleValidation = false;
        }   
}

function proDarkMode()  {
    let darkToggle = document.getElementById("progressiveDarkMode");
    if (darkToggle.innerText == "Progressively Darker Mode : OFF") {
        darkToggle.innerText = "Progressively Darker Mode : ON";
        proDarkToggleValidation = true;
        }   else {
            darkToggle.innerText = "Progressively Darker Mode : OFF";
            proDarkToggleValidation = false;
        }   
}

function resetMode() {
        // recreates grid to sizeofgrid which is defaulted to 16 but can be changed by the gridresizeprompt
        let getNumberOfRowsAndColumns = sizeOfGrid
        container.innerHTML = "";
        sizeOfGrid = getNumberOfRowsAndColumns
        createGrid(sizeOfGrid);
}


createGrid(sizeOfGrid)
