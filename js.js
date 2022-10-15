let center = document.querySelector(".center")
let header = document.querySelector(".header")
let colorContainer = null
let rightSide = null 
let divRows = []
let divBox = []
let divGrid = document.querySelector("#grid")
let clearButton = null 
const sizeButton = document.querySelector(".sizeButton")
let colorCollection = ["red", "purple", "orange", "yellow", "darkblue", "darkgreen", "pink", "lightgreen", "brown"]
let rainbowMode = false
let colorMode = false
let eraserMode = false

let activateColorMode = null
let colorButton = null
let colorChoice = "black"
//let colorMode = null
let colorRainbow = null
let colorEraser = null

function getPalletSize() {
    divGrid.innerHTML = ""
    let palletSize = prompt("pick your size! \n Between 1-100");
    while (palletSize <= 0 || palletSize >= 100) {
        palletSize = prompt("Please pick between 1 and 100")
    }
    if (palletSize == 69) {
        alert("Nice!")
    }
    makeGrid(palletSize)
}

//makes grid
//nested loop making 16 by 16 grid with class-added divs
function makeGrid(size) {
    for (let i = 0; i < size; i++) {
        divRows[i] = document.createElement("div");
        divGrid.appendChild(divRows[i])
        divRows[i].classList.add("row");

        for (let j = 0; j < size; j++) {
            divBox[j] = document.createElement("div");
            divRows[i].appendChild(divBox[j]);
            divBox[j].classList.add("box");
        }
    }
}

function makeButtons() {
    if (rightSide === null) {
        rightSide = document.createElement("div")
        rightSide.classList.add("right")
        center.appendChild(rightSide)
    }
    if (colorContainer === null) {
        colorContainer = document.createElement("label")
        colorContainer.classList.add("colorContainer")
        rightSide.appendChild(colorContainer)
    }
    if (colorButton === null) {
        colorButton = document.createElement("input")
        colorButton.setAttribute("type", "color")
        colorContainer.appendChild(colorButton)
    }
    sizeButton.innerText = "Size"
    if (activateColorMode === null) {
        activateColorMode = document.createElement("button")
        activateColorMode.classList.add("ActivateColorMode")
        activateColorMode.innerText = "Color Mode"
        rightSide.appendChild(activateColorMode)
    }
    if (colorRainbow === null) {
        colorRainbow = document.createElement("button")
        colorRainbow.classList.add("colorRainbow")
        colorRainbow.innerText = "Rainbow"
        rightSide.appendChild(colorRainbow)
    }
    if (colorEraser === null) {
        colorEraser = document.createElement("button")
        colorEraser.classList.add("colorEraser")
        colorEraser.innerText = "Eraser"
        rightSide.appendChild(colorEraser)
    }
    if (clearButton === null) {
        clearButton = document.createElement("button")
        clearButton.classList.add("clearButton")
        clearButton.innerText = "Clear Pallet"
        rightSide.appendChild(clearButton)
    }
    
}
function setActiveButton (Mode) {
    if (Mode == "colorMode") {
        colorMode = true
        rainbowMode = false
        eraserMode = false
    }
    if (Mode == "rainbowMode") {
        colorMode = false
        rainbowMode = true
        eraserMode = false
    }
    if (Mode == "eraserMode") {
        colorMode = false
        rainbowMode = false
        eraserMode = true
    }

}
function updateButtonStyle() {
    if (colorMode == true) {
        colorRainbow.classList.remove("active");
        colorEraser.classList.remove("active");
        activateColorMode.classList.add("active")
        header.style.backgroundColor = colorChoice
        header.style.color = "white"
    }
    if (eraserMode == true) {
        colorRainbow.classList.remove("active");
        colorEraser.classList.add("active");
        activateColorMode.classList.remove("active")
        header.style.backgroundColor = "white"
        header.style.color = "black"
    }
    if (rainbowMode == true) {
        colorRainbow.classList.add("active");
        colorEraser.classList.remove("active");
        activateColorMode.classList.remove("active")
        header.style.backgroundColor = "red"
    }
}

sizeButton.addEventListener("click", () => {
    getPalletSize();
    makeButtons();

    //adds colored-class to divs if hovered over by user
    document.querySelectorAll(".box").forEach(item => {
        item.addEventListener("mouseover", () => {
            //item.classList.add("colored");
            if (eraserMode === true) {
                item.style.backgroundColor = "white"
            }
            else if (rainbowMode === true) {
                    let red = Math.floor(Math.random() * 256);
                    let green = Math.floor(Math.random() * 256);
                    let blue = Math.floor(Math.random() * 256);
                    let rainbowRGB = "rgb(" + red + "," + blue + "," + green + ")"
                    item.style.backgroundColor = rainbowRGB
                    header.style.backgroundColor = rainbowRGB
            } else {
                item.style.backgroundColor = colorChoice
            }
        })
    });
    //clears pallet 
    clearButton.addEventListener("click", () => {
        document.querySelectorAll(".box").forEach(item => {
            item.style.backgroundColor = "white"
            });
        //setActiveButton("colorMode")
        updateButtonStyle()
    });

    colorButton.addEventListener("input", (e) => {
        setActiveButton("colorMode")
        updateButtonStyle()
        colorChoice = e.target.value;
        colorContainer.style.backgroundColor = colorChoice
    })

    colorEraser.addEventListener("click", () => {
        setActiveButton("eraserMode")
        updateButtonStyle()
    })

    colorRainbow.addEventListener("click", () => {
        setActiveButton("rainbowMode")
        updateButtonStyle()
    })

    activateColorMode.addEventListener("click", () => {
        setActiveButton("colorMode")
        updateButtonStyle()
    })

});


