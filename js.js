let divRows = []
let divBox = []
let divGrid = document.querySelector("#grid")
const clearButton = document.querySelector(".clearButton")
const sizeButton = document.querySelector(".sizeButton")


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
        let rowNum = i + 1
        divRows[i].classList.add(`row${rowNum}`);
        divRows[i].classList.add("row");

        for (let j = 0; j < size; j++) {
            divBox[j] = document.createElement("div");
            divRows[i].appendChild(divBox[j]);
            let boxNum = j + 1;
            divBox[j].classList.add(`box${boxNum}`);
            divBox[j].classList.add("box");

        }
    }
}

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

sizeButton.addEventListener("click", () => {
    getPalletSize();
})
