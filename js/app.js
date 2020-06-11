/*---------- DOM References ----------*/

// get canvas context
var ctx = document.getElementById('game').getContext('2d');
let game = document.getElementById("game");

/*---------- Game Variables ----------*/

let plopNumber = 0;
let seedCount = 5;
let activePlants = [];


/*---------- Game Logic ----------*/

//draw the things

function Plant(x, y, color, width, height) { // these are all the things that change
    this.x = x;
    this.y = y;
    this.color = color; 
    this.width = width;
    this.height = height;
    this.thirsty = false;
    this.produce = false;
    this.empty = true;
    this.render = function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

let flower = new Plant(0, 0, "#c58ae3", 20, 50);

let farmer = new Plant(10 ,80, "#1f1be3", 40, 70);

let plop0 = new Plant(10, 140, "#753e10", 40, 10);
let plop1 = new Plant(70, 140, "#753e10", 40, 10);
let plop2 = new Plant(130, 140, "#753e10", 40, 10);
let plop3 = new Plant(190, 140, "#753e10", 40, 10);
let plop4 = new Plant(250, 140, "#753e10", 40, 10);

let plantedSeed0 = new Plant(25, 135, "#659456", 10, 5);
let plantedSeed1 = new Plant(85, 135, "#659456", 10, 5);
let plantedSeed2 = new Plant(145, 135, "#659456", 10, 5);
let plantedSeed3 = new Plant(205, 135, "#659456", 10, 5);
let plantedSeed4 = new Plant(265, 135, "#659456", 10, 5);

const renderPlops = () => {
    plop0.render();
    plop1.render();
    plop2.render();
    plop3.render();
    plop4.render();
}

const renderActivePlants = () => {
    // for each plant in activePlants array, render it?
    plantedSeed0.render();
    plantedSeed1.render();
    plantedSeed2.render();
    plantedSeed3.render();
    plantedSeed4.render();
}

//check the things
const checkPlop = () => {
    switch(plopNumber) {
        case 0:
            plop0.empty ? true : false
            return (plop0.empty)
        case 1:
            plop1.empty ? true : false
            return (plop1.empty)
        case 2:
            plop2.empty ? true : false
            return (plop2.empty)
        case 3:
            plop3.empty ? true : false
            return (plop3.empty)
        case 4:
            plop4.empty ? true : false
            return (plop4.empty)
        default:
            console.log("👩🏻‍🌾")
    }
}

//tend the garden

 const doAction = () => {
    if (checkPlop(false)) {
        plantSeed(plopNumber);  
    } else {
        waterFlower();
    }
 }

 const plantSeed = (plopNumber) => {
    console.log("you planted a seed!");
    switch(plopNumber) {
        case 0: plop0.empty = false;
        break;
        case 1: plop1.empty = false;
        break;
        case 2: plop2.empty = false;
        break;
        case 3: plop3.empty = false;
        break;
        case 4: plop4.empty = false;
        default:
            console.log("👩🏻‍🌾")
    }
 }

const waterFlower = () => {
    console.log("you watered the plant!")
}

//run the game

const gameTick = () => {
    ctx.clearRect(0, 0, game.width, game.height)
    farmer.render();
    renderPlops();
    renderActivePlants();
}

let gameLoop = setInterval(gameTick, 60); //17 millisonds is slightly faster than 60 frames p/s

//move the farmer

const movementHandler = (e) => {
    //go left
  if (e.keyCode == '37') {
      if (farmer.x < 31) {
          console.log("can't go that way")
      } else {
        farmer.x -= 60;
        plopNumber --;
        console.log(plopNumber);
      }
      //go right
    } if (e.keyCode == '39') {
        if (farmer.x > 240){
            console.log("can't go that way")
        } else {
            farmer.x += 60;
            plopNumber ++;
            console.log(plopNumber);
        }
        //space bar
    } else if (e.keyCode == "32"){
        doAction();
    }
}

document.addEventListener("keydown", movementHandler);

