const cellSize = 200;
const windowWidth = cellSize * 3, windowHeight = cellSize * 3;
var canvas;
var grid = [];
var elementIdArray = ["nothing", "bread", "cheese", "ham"];
var breadImage, cheeseImage, hamImage;

function preload() {
    breadImage = loadImage("Resources/bread.jpg");
    cheeseImage = loadImage("Resources/cheese.jpg");
    hamImage = loadImage("Resources/ham.jpg");
}

function mousePressed() {
    let gridX = Math.floor(3 * (mouseX / windowWidth));
    let gridY = Math.floor(3 * (mouseY / windowHeight));
    let input = prompt("Bread, ham or cheese?");
    let id;
    if (input.toLowerCase() == "bread") id = 1;
    else if (input.toLowerCase() == "cheese") id = 2;
    else if (input.toLowerCase() == "ham") id = 3;
    else {
        alert("That's not what I asked you tho");
        return;
    }
    grid[gridX + gridY * 3] = id;
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // i did have to do it infact
    document.body.style = "background: black; width: 100vw; height: 70vh; display: flex; flex-direction: column; align-items: center;"
    for (let i = 0; i < 9; i++) {
        grid.push(0);
    }
}

function draw() {
    background(255);
    for (let i = 0; i < 9; i++) {
        if (grid[i] == 1) image(breadImage, i % 3, Math.floor(i / 3), cellSize);
        if (grid[i] == 2) image(cheeseImage, i % 3, Math.floor(i / 3), cellSize);
        if (grid[i] == 3) image(hamImage, i % 3, Math.floor(i / 3), cellSize);
    }
}
