//sets default cell color, global variable
let color = "black";

//make grid and removes previous grid
function gridBuild(size) {
    let container = document.querySelector('.container');
    let cells = container.querySelectorAll('div');
    cells.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size*size); i++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", cellColor);
        cell.style.backgroundColor = "white";
        container.insertAdjacentElement("beforeend", cell);
    }
}
gridBuild(16);

//clear button event listener - activates pop up, conditional restrictions on grid size
let buttonClear = document.querySelector('#clear');
buttonClear.addEventListener('click', () => {
    let newSize = prompt("What size grid would you like?");
    if (newSize > 100 || newSize< 2) {
        alert("Please choose a number between 2 - 100");
        return false;
    }
    else {
        gridBuild(newSize);
    }
});

//adds functionality to grey button
let buttonGrey = document.querySelector('#grey');
buttonGrey.addEventListener('click', () => {
    color = 'grey';
});

//random colour selecting function
function rainbowColor() {
    let randomNumber = Math.floor((Math.random() * 360) + 1);
    rainbow = `hsl(${randomNumber}, 100%, 50%)`;
    return rainbow;
}    

//colors cells with button choices
function cellColor() {
    if(color === 'rainbow') {
        this.style.backgroundColor = rainbowColor();
    } 
    else {
    this.style.backgroundColor = color;   
    }
}

//changes global variable to user selection
function colorButton(selection) {
    color = selection;
}


