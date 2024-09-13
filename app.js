let sizeOfGrid = 16;
let rgbToggleValidation = false;
let proDarkToggleValidation = false;

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
            const {red, green, blue} = createRGBValue()
            let backgroundOpacityCounter = 0;
            let backgroundOpacity = 0;

            square.addEventListener('mouseover', () => {
                    if (rgbToggleValidation == true) {
                        if (proDarkToggleValidation == true) {
                            const randomBackgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
                            square.style.background = randomBackgroundColor;

                            if (backgroundOpacityCounter < 10)   {
                                backgroundOpacity += 0.1;
                                backgroundOpacityCounter += 1;
                                console.log("backgroundOpacity" + backgroundOpacity + " @ " + backgroundOpacityCounter + "times")

                                square.style.opacity = backgroundOpacity
                                } else {}
                                
                        }
                            else if (proDarkToggleValidation == false) {
                                    const randomBackgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
                                    square.style.background = randomBackgroundColor;
                        }

                    } else if (rgbToggleValidation == false) {
                            if (proDarkToggleValidation == true) {
                                if (backgroundOpacityCounter < 10)   {
                                    backgroundOpacity += 0.1;
                                    backgroundOpacityCounter += 1;
                                    console.log("backgroundOpacity" + backgroundOpacity + " @ " + backgroundOpacityCounter + "times")

                                    square.style.opacity = backgroundOpacity

                                    const blackBackgroundColor = "rgb(0 , 0, 0)";
                                    square.style.background = blackBackgroundColor;
                                } else {}
                        } 
                            else if (proDarkToggleValidation == false) {
                                const blackBackgroundColor = "rgb(0 , 0, 0)";
                                square.style.background = blackBackgroundColor;
                                backgroundOpacity = 1;
                        }
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

function proDarkMode()  {
    let darkToggle = document.getElementById("progressiveDarkMode");
    if (darkToggle.innerText == "Progressively Darker Mode : OFF") {
        darkToggle.innerText = "Progressively Darker Mode : ON";
        proDarkToggleValidation = true;
        console.log(proDarkToggleValidation)
        }   else {
            darkToggle.innerText = "Progressively Darker Mode : OFF";
            proDarkToggleValidation = false;
            console.log(proDarkToggleValidation)
        }   
}

function resetMode() {
        let getNumberOfRowsAndColumns = sizeOfGrid
        container.innerHTML = "";
        sizeOfGrid = getNumberOfRowsAndColumns
        createGrid(sizeOfGrid);
}


createGrid(sizeOfGrid)
