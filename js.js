let center = document.querySelector(".center")
let colorContainer = null
let rightSide = null //document.querySelector(".right")
let divRows = []
let divBox = []
let divGrid = document.querySelector("#grid")
let clearButton = null //document.querySelector(".clearButton")
const sizeButton = document.querySelector(".sizeButton")
let rainbowMode = false

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
   // if (colorMode === null) {
     //   colorMode = document.createElement("button")
     //   colorMode.classList.add("colorMode")
     //   colorMode.innerText = "Color Mode"
     //   rightSide.appendChild(colorMode)
    //}
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
        clearButton.innerText = "Clear pallet"
        rightSide.appendChild(clearButton)
    }
    
}


sizeButton.addEventListener("click", () => {
    getPalletSize();
    makeButtons();

    //adds colored-class to divs if hovered over by user
    document.querySelectorAll(".box").forEach(item => {
        item.addEventListener("mouseover", () => {
            //item.classList.add("colored");
            if (rainbowMode === false) {
                item.style.backgroundColor = colorChoice
            }
            else {
                    let red = Math.floor(Math.random() * 256);
                    let green = Math.floor(Math.random() * 256);
                    let blue = Math.floor(Math.random() * 256);
                    item.style.backgroundColor = "rgb(" + red + "," + blue + "," + green + ")"
                    console.log(item.style.backgroundColor)
            }
        })
    });
    //clears pallet 
    clearButton.addEventListener("click", () => {
        document.querySelectorAll(".box").forEach(item => {
            item.style.backgroundColor = "white"
            });
        rainbowMode = false
    });

    colorButton.addEventListener("change", (e) => {
        rainbowMode = false;
        colorChoice = e.target.value;
        colorContainer.style.backgroundColor = colorChoice
    })

    colorEraser.addEventListener("click", () => {
        rainbowMode = false
        colorChoice = "white"
    })

    colorRainbow.addEventListener("click", () => {
        rainbowMode = true;
        console.log(rainbowMode)
    })


});


