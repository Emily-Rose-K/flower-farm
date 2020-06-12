/*---------- DOM References ----------*/

// get canvas context
var ctx = document.getElementById('game').getContext('2d');
let game = document.getElementById("game");

/*---------- Game Variables ----------*/

let plopNumber = 0;
let seedCount = 5;
let sparkleCount = 0;
let activePlants = [];
let thirstyBoys = [];


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

// all the things that are things in my thing

let flower = new Plant(0, 0, "#c58ae3", 20, 50);

let farmer = new Plant(10 ,80, "#1f1be3", 40, 60);

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

let thirstPlant0 = new Plant(25, 125, "#2bdfff", 10, 5);
let thirstPlant1 = new Plant(85, 125, "#2bdfff", 10, 5);
let thirstPlant2 = new Plant(145, 125, "#2bdfff", 10, 5);
let thirstPlant3 = new Plant(205, 125, "#2bdfff", 10, 5);
let thirstPlant4 = new Plant(265, 125, "#2bdfff", 10, 5);

let grownFlower0 = new Plant(25, 115, "#912bff", 10, 25);
let grownFlower1 = new Plant(85, 115, "#912bff", 10, 25);
let grownFlower2 = new Plant(145, 115, "#912bff", 10, 25);
let grownFlower3 = new Plant(205, 115, "#912bff", 10, 25);
let grownFlower4 = new Plant(265, 115, "#912bff", 10, 25);


// render lots of things that are things in my things

const renderPlops = () => {
    plop0.render();
    plop1.render();
    plop2.render();
    plop3.render();
    plop4.render();
}

const renderActivePlants = (activePlants) => {
    // for each plant in activePlants array, render it
    // because i only want to render plants if they were planted
    activePlants.forEach(element => element.render());
}

const renderThirstyBoys = (thirstyBoys) => {
    thirstyBoys.forEach(element => element.render());
}

//check if plop can receive seed

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
        break;
        default:
            console.log("🌏")
    }
}

//check if plant needs water

const checkThirst = () => {
    switch(plopNumber) {
        case 0:
            plantedSeed0.thirsty ? true : false
            return (plantedSeed0.thirsty)
        case 1:
            plantedSeed1.thirsty ? true : false
            return (plantedSeed1.thirsty)
        case 2:
            plantedSeed2.thirsty ? true : false
            return (plantedSeed2.thirsty)
        case 3:
            plantedSeed3.thirsty ? true : false
            return (plantedSeed3.thirsty)
        case 4:
            plantedSeed4.thirsty ? true : false
            return (plantedSeed4.thirsty)
        break;
        default:
            console.log("🍷")
    }
}

//tend the garden

 const doAction = () => {
    if (checkPlop()) {
        plantSeed(plopNumber);  
    } else if (checkThirst()){
        waterPlant(plopNumber);
    } else {
        console.log("🌱👎🏼🍷")
    }
 }

 const plantSeed = (plopNumber) => {
    switch(plopNumber) {
        case 0: 
        plop0.empty = false;
        activePlants.push(plantedSeed0);
        setTimeout(function() {
            thirstQuench(plopNumber)
        },Math.floor(Math.random() * 10000) + 3000) 
        break;
        case 1: 
        plop1.empty = false;
        activePlants.push(plantedSeed1);
        setTimeout(function() {
            thirstQuench(plopNumber)
        },Math.floor(Math.random() * 10000) + 3000) 
        break;
        case 2: 
        plop2.empty = false;
        activePlants.push(plantedSeed2);
        setTimeout(function() {
            thirstQuench(plopNumber)
        },Math.floor(Math.random() * 10000) + 3000) 
        break;
        case 3: 
        plop3.empty = false;
        activePlants.push(plantedSeed3);
        setTimeout(function() {
            thirstQuench(plopNumber)
        },Math.floor(Math.random() * 10000) + 3000) 
        break;
        case 4: plop4.empty = false;
        activePlants.push(plantedSeed4);
        setTimeout(function() {
            thirstQuench(plopNumber)
        },Math.floor(Math.random() * 10000) + 3000) 
        break;
        default:
            console.log("🌰")
    }
 }

const waterPlant = (plopNumber) => {
    switch(plopNumber) {
        case 0: 
        plantedSeed0.thirsty = false;
        //remove from thirstyBoys when watered
        const index0 = thirstyBoys.indexOf(thirstPlant0);
            if (index0 > -1) {
            thirstyBoys.splice(index0, 1);
            }
        // in five seconds, grow into a flower!
        setTimeout(function() {
            growBig(plopNumber)
        },Math.floor(Math.random() * 10000) + 3000) 
        break;
        case 1: 
        plantedSeed1.thirsty = false;
        const index1 = thirstyBoys.indexOf(thirstPlant1);
            if (index1 > -1) {
            thirstyBoys.splice(index1, 1);
            }
        setTimeout(function() {
            growBig(plopNumber)
        },Math.floor(Math.random() * 10000) + 3000) 
        break;
        case 2: 
        plantedSeed2.thirsty = false;
        const index2 = thirstyBoys.indexOf(thirstPlant2);
            if (index2 > -1) {
            thirstyBoys.splice(index2, 1);
            }
        setTimeout(function() {
            growBig(plopNumber)
        },Math.floor(Math.random() * 10000) + 3000) 
        break;
        case 3: 
        plantedSeed3.thirsty = false;
        const index3 = thirstyBoys.indexOf(thirstPlant3);
            if (index3 > -1) {
            thirstyBoys.splice(index3, 1);
            }
        setTimeout(function() {
            growBig(plopNumber)
        },Math.floor(Math.random() * 10000) + 3000) 
        break;
        case 4: 
        plantedSeed4.thirsty = false;
        const index4 = thirstyBoys.indexOf(thirstPlant4);
            if (index4 > -1) {
                thirstyBoys.splice(index4, 1);
            }
        setTimeout(function() {
           growBig(plopNumber)
        } ,Math.floor(Math.random() * 10000) + 3000) 
        break;
        default:
            console.log("🚰")
    }
}

//run the game

const gameTick = () => {
    ctx.clearRect(0, 0, game.width, game.height)
    farmer.render();
    renderPlops();
    renderActivePlants(activePlants);
    renderThirstyBoys(thirstyBoys);
}

//17 millisonds is slightly faster than 60 frames p/s
let gameLoop = setInterval(gameTick, 60); 

//move the farmer

const movementHandler = (e) => {
    //go left
    if (e.keyCode == '37') {
        if (farmer.x < 31) {
        } else {
            farmer.x -= 60;
            plopNumber --;
        } //go right
    } else if (e.keyCode == '39') {
        if (farmer.x > 240){ 
        } else {
            farmer.x += 60;
            plopNumber ++;
        } //space bar to do action
    } else if (e.keyCode == "32"){
            doAction();
    }
}

document.addEventListener("keydown", movementHandler);

// al of my time shenanigans

const thirstQuench = (plopNumber) => {
    switch(plopNumber) {
        case 0:
           plantedSeed0.thirsty = true;
           thirstyBoys.push(thirstPlant0);
        break;
        case 1:
            plantedSeed1.thirsty = true;
            thirstyBoys.push(thirstPlant1);
        break;
        case 2:
            plantedSeed2.thirsty = true;
            thirstyBoys.push(thirstPlant2);
        break;
        case 3:
            plantedSeed3.thirsty = true;
            thirstyBoys.push(thirstPlant3);
        break;
        case 4:
            plantedSeed4.thirsty = true;
            thirstyBoys.push(thirstPlant4);
        break;
        default:
            console.log("🥵")
    }
}

const growBig = (plopNumber) => {
    switch(plopNumber) {
        case 0:
        // remove planted seed from active plants
        const index0 = activePlants.indexOf(plantedSeed0);
            if (index0 > -1) {
            activePlants.splice(index0, 1);
        } // add flower to active plants
        activePlants.push(grownFlower0)
        // start flower timer for producing sparkles
        setTimeout(function() {
            produceSparkle(plopNumber)
        },Math.floor(Math.random() * 10000) + 3000)  
        break;
        case 1:
        const index1 = activePlants.indexOf(plantedSeed1);
            if (index1 > -1) {
            activePlants.splice(index1, 1);
        }
        activePlants.push(grownFlower1)
        setTimeout(function() {
            produceSparkle(plopNumber)
        },Math.floor(Math.random() * 10000) + 3000)   
        break;
        case 2:
        const index2 = activePlants.indexOf(plantedSeed2);
            if (index2 > -1) {
            activePlants.splice(index2, 1);
        }
        activePlants.push(grownFlower2)
        setTimeout(function() {
            produceSparkle(plopNumber)
        },Math.floor(Math.random() * 10000) + 3000)
        break;
        case 3:
        const index3 = activePlants.indexOf(plantedSeed3);
            if (index3 > -1) {
            activePlants.splice(index3, 1);
        }
        activePlants.push(grownFlower3)
        setTimeout(function() {
            produceSparkle(plopNumber)
        },Math.floor(Math.random() * 10000) + 3000)     
        break;
        case 4:
        const index4 = activePlants.indexOf(plantedSeed0);
            if (index4 > -1) {
            activePlants.splice(index4, 1);
        }
        activePlants.push(grownFlower4)
        setTimeout(function() {
            produceSparkle(plopNumber)
        },Math.floor(Math.random() * 10000) + 3000)
        break;
        default:
            console.log("🍄")
    }
}
const produceSparkle = () => {
    setInterval(function(){ 
        seedCount ++;
        console.log(seedCount)
    }, Math.floor(Math.random() * 10000) + 3000);
}