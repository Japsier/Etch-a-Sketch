let divRows = []
let divBox = []
let divGrid = document.querySelector("#grid")
const clearButton = document.querySelector(".clearButton")
const sizeButton = document.querySelector(".sizeButton")
let palletSizeSet = false


function getPalletSize() {
    divGrid.innerHTML = ""
    let palletSize = prompt("pick your size! \n Between 1-100");
    while (palletSize <= 0 || palletSize >= 100) {
        palletSize = prompt("Please pick between 1 and 100")
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
    palletSize = true
}


sizeButton.addEventListener("click", () => {
    getPalletSize();

    //adds colored-class to divs if hovered over by user
    document.querySelectorAll(".box").forEach(item => {
        item.addEventListener("mouseover", () => {
            item.classList.add("colored");
        })
    });
    //clears pallet 
    clearButton.addEventListener("click", () => {
        document.querySelectorAll(".box").forEach(item => {
            item.classList.remove("colored");
            });
    });
});
