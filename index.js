//code for things

//test code below

/*
const newDiv = document.createElement("div");

newDiv.textContent = "Hello, world!";

document.body.appendChild(newDiv);
*/


//code below was my previous code 10/27 or whenever I made the push


/*
const container = document.createElement("div");
container.id = "myDiv";
document.body.appendChild(container);


function createGrid(gridSize) {
    //research this stuff later, everything
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.style.gap = "2px"; // Optional: Adds spacing between grid cells
    
    
    for (let i = 0; i < gridSize; i++ ){
        for (let j = 0; j < gridSize; j++){
            const div = document.createElement("div");
            div.classList.add('grid-cell');
            div.style.width = "100px"; // Set a fixed size for cells
            div.style.height = "200px";
            div.style.border = "1px solid #ccc"; // Optional: Adds border to each cell
            container.appendChild(div);
        }
    }
}


createGrid(16);
*/



//new code (please research some of this), 
//this includes researching the stuff from html and other files



let color = 'black';

function populateBoard(size){
let board = document.querySelector('.board');

let squares = board.querySelectorAll('div');
squares.forEach(div=> div.remove());


board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
board.style.gridTemplateRows = `repeat(${size} , 1fr)`;


let amount = size * size;

for(let i = 0; i < amount; i++){
    let square = document.createElement('div');

    //event listener
    square.addEventListener('mouseover', colorSquare);


    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
}
}


populateBoard(16);


function changeSize(input){
    //validation for input so crash doesn't happen
    if(input >= 2 && input <= 100){
        populateBoard(input);
    }

    else{
        console.log("too many squares");
    }
    
}

//colorSquare function
//the this word refers to whatever square we're hovering over
function colorSquare(){
    if(color === 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else{
        this.style.backgroundColor = color;
    }
}

function changeColor(choice){
    color = choice;
}


//reset function

function resetBoard(){
let board = document.querySelector('.board');
let squares = board.querySelectorAll('div');
squares.forEach(div=> div.style.backgroundColor = "white");
}