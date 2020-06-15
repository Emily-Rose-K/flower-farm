/*---------- DOM References ----------*/

// get canvas context
var ctx = document.getElementById('game').getContext('2d');
var game = document.getElementById("game");


/*---------- Game Variables ----------*/

let plopNumber = 0;
let seedCount = 5;
let time = 60;
let sparkleCount = 0;
let activeSparkles =[];
let activePlants = [];
let thirstyBoys = [];

var thirstTime;
var growTime;
var sparkleTime;

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

let sparkle0 = new Plant(25, 90, "#ffe817", 10, 10);
let sparkle1 = new Plant(85, 90, "#ffe817", 10, 10);
let sparkle2 = new Plant(145, 90, "#ffe817", 10, 10);
let sparkle3 = new Plant(205, 90, "#ffe817", 10, 10);
let sparkle4 = new Plant(265, 90, "#ffe817", 10, 10);



//---------- RENDERING LOTS OF THINGS ----------//

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

const renderActiveSparkles = (activeSparkles) => {
    activeSparkles.forEach(element => element.render());
}

//---------- GAME STATE ----------//

//reset all the plants to their mostly original state

const resetPlants = () => {
    farmer.x = 10;
    farmer.y = 80;

    plop0.empty = true;
    plop1.empty = true;
    plop2.empty = true;
    plop3.empty = true;
    plop4.empty = true;


    plantedSeed0.thirsty = false;
    plantedSeed1.thirsty = false;
    plantedSeed2.thirsty = false;
    plantedSeed3.thirsty = false;
    plantedSeed4.thirsty = false;

    grownFlower0.produce = false;
    grownFlower1.produce = false;
    grownFlower2.produce = false;
    grownFlower3.produce = false;
    grownFlower4.produce = false;
}

// make clock go tick tick
function tick () {
    time -=1;
    document.getElementById("timer").textContent = time;
    if (time === 10) {
        document.getElementById("timer").style.color = "red";
    } else if (time === 30) {
        document.getElementById("timer").style.color = "orange";
    }
    if (time <= 0) {
        endGame();
    }
}

const gameTick = () => {
    ctx.clearRect(0, 0, game.width, game.height)
    farmer.render();
    renderPlops();
    renderActivePlants(activePlants);
    renderThirstyBoys(thirstyBoys);
    renderActiveSparkles(activeSparkles);
    document.getElementById("sparkles").textContent = `✨:${sparkleCount}`;
}

const startGame = () =>{
    gameLoop = setInterval(gameTick, 17); 
    interval = setInterval(tick, 1000);
}
const endGame = () => {
    clearInterval(interval);
    clearInterval(gameLoop);
    clearTimeout(thirstTime);
    clearTimeout(growTime);
    clearTimeout(sparkleTime);
    if (sparkleCount > 45) {
        document.getElementById("message").innerText = "Great job tending the flowers 🌷 !  You got so many sparkles! ✨"
        //update win count?
    } else {
        document.getElementById("message").innerText = "Aw too bad 👎🏼 ,  you didn't collect enough sparkles. ✨"
        //update lose count?
    }
    document.getElementById("playAgain").style.display = "grid" ;
    //play again?
    resetPlants();
}

const resetGame = () =>{
    activePlants = [];
    thirstyBoys = [];
    activeSparkles =[];
    time = 60;
    sparkleCount = 0;
    plopNumber = 0;
    resetPlants();
    clearTimeout(thirstTime);
    clearTimeout(growTime);
    clearTimeout(sparkleTime);
  }

// more DOM references for clicking play na dplay again.
document.getElementById("play").addEventListener("click", function(){
    startGame();
    document.getElementById("play").style.display = "none";
  });

  document.getElementById("playAgain").addEventListener("click", function(){
    ctx.clearRect(0, 0, game.width, game.height)
    resetGame();
    startGame();
    document.getElementById("playAgain").style.display = "none";
    document.getElementById("timer").style.color = "black";
    document.getElementById("message").innerText = ""
  });


//---------- CHECK THE STATE OF THE PLANTS ----------//

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
        default:
            console.log("🍷")
    }
}

// check if flower is producing sparkles

const checkSparkle = () => {
    switch(plopNumber) {
        case 0:
            grownFlower0.produce ? true : false
            return (grownFlower0.produce)
        case 1:
            grownFlower1.produce ? true : false
            return (grownFlower1.produce)
        case 2:
            grownFlower2.produce ? true : false
            return (grownFlower2.produce)
        case 3:
            grownFlower3.produce ? true : false
            return (grownFlower3.produce)
        case 4:
            grownFlower4.produce ? true : false
            return (grownFlower4.produce)
        default:
            console.log("🍷")
    }
}

//---------- FARMER ACTION HANDLER & FARMER MOVEMENT ----------//

//tend the garden

 const doAction = () => {
    if (checkPlop()) {
        plantSeed(plopNumber);  
    } else if (checkThirst()){
        waterPlant(plopNumber);
    } else if (checkSparkle()){
        harvestSparkle(plopNumber)
    } else {
        console.log("🌱👎🏼🍷")
    }
 }

 const movementHandler = (e) => {
    //go left
    if (e.keyCode == '37') { 
        if (farmer.x < 31) {
        }else {
            farmer.x -= 60;
            plopNumber --;
        } //go right
    }else if (e.keyCode == '39') {
        if (farmer.x > 240){ 
        }else {
            farmer.x += 60;
            plopNumber ++; 
        } //space bar to do action
    }else if (e.keyCode == "32"){
            doAction();
    }
}
document.addEventListener("keydown", movementHandler);


 const plantSeed = (plopNumber) => {
    switch(plopNumber) {
        case 0: 
            plop0.empty = false;
            activePlants.push(plantedSeed0);
            thirsty();
            break;
        case 1: 
            plop1.empty = false;
            activePlants.push(plantedSeed1);
            thirsty();
        break;
        case 2: 
            plop2.empty = false;
            activePlants.push(plantedSeed2);
            thirsty();
        break;
        case 3: 
            plop3.empty = false;
            activePlants.push(plantedSeed3);
            thirsty();
        break;
            case 4: plop4.empty = false;
            activePlants.push(plantedSeed4);
            thirsty();
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
        growth();
        break;
        case 1: 
        plantedSeed1.thirsty = false;
        const index1 = thirstyBoys.indexOf(thirstPlant1);
            if (index1 > -1) {
            thirstyBoys.splice(index1, 1);
            }
        growth();
        break;
        case 2: 
        plantedSeed2.thirsty = false;
        const index2 = thirstyBoys.indexOf(thirstPlant2);
            if (index2 > -1) {
            thirstyBoys.splice(index2, 1);
            }
        growth();
        break;
        case 3: 
        plantedSeed3.thirsty = false;
        const index3 = thirstyBoys.indexOf(thirstPlant3);
            if (index3 > -1) {
            thirstyBoys.splice(index3, 1);
            }
        growth();
        break;
        case 4: 
        plantedSeed4.thirsty = false;
        const index4 = thirstyBoys.indexOf(thirstPlant4);
            if (index4 > -1) {
                thirstyBoys.splice(index4, 1);
            }
        growth();
        break;
        default:
            console.log("🚰")
    }
}

const harvestSparkle = (plopNumber) => {
    switch(plopNumber) {
        case 0: 
            //remove from activeSparkles when harvested
            const index0 = activeSparkles.indexOf(sparkle0);
            if (index0 > -1) {
                activeSparkles.splice(index0, 1);
            }
            // increase sparkle count
            sparkleCount++;
            // stop produce
            grownFlower0.produce = false;
            harvest(0);
            break;
        case 1: 
            const index1 = activeSparkles.indexOf(sparkle1);
            if (index1 > -1) {
                activeSparkles.splice(index1, 1);
            }
            sparkleCount++;
            grownFlower1.produce = false;
            harvest(1);
            break;
        case 2: 
            const index2 = activeSparkles.indexOf(sparkle2);
            if (index2 > -1) {
                activeSparkles.splice(index2, 1);
            }
            sparkleCount++;
            grownFlower2.produce = false;
            harvest(2);
            break;
        case 3: 
            const index3 = activeSparkles.indexOf(sparkle3);
            if (index3 > -1) {
                activeSparkles.splice(index3, 1);
            }
            sparkleCount++;
            grownFlower3.produce = false;
            harvest(3);
            break;
        case 4: 
            const index4 = activeSparkles.indexOf(sparkle4);
            if (index4 > -1) {
                activeSparkles.splice(index4, 1);
            }
            sparkleCount++;
            grownFlower4.produce = false;
            harvest(4);
            break;
        default:
            console.log("🦋")
    }
}

//----------TIMEOUTS ----------//

//seed gets thirsty as soon as 3 - 5 seconds
function thirsty () {
    thirstTime = setTimeout(thirstQuench, Math.floor(Math.random() * 5000) + 3000, plopNumber);  
 }

 //seed grows into flower as soon as 1 - 3 seconds
function growth () {
    growTime = setTimeout(growBig, Math.floor(Math.random() * 3000) + 1000, plopNumber);  
}

// flower produces sparkle as soon as 3 - 5 seconds
function harvest (currentnum) {
    sparkleTime = setTimeout(produceSparkle, Math.floor(Math.random() * 5000) + 3000, currentnum); 
}


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
            activePlants.push(grownFlower0);
            // start flower timer for producing sparkles
            harvest(0);
            break;
        case 1:
            const index1 = activePlants.indexOf(plantedSeed1);
            if (index1 > -1) {
                activePlants.splice(index1, 1);
            }
            activePlants.push(grownFlower1);
            harvest(1);
            break;
        case 2:
            const index2 = activePlants.indexOf(plantedSeed2);
            if (index2 > -1) {
                activePlants.splice(index2, 1);
            }
            activePlants.push(grownFlower2);
            harvest(2);
            break;
        case 3:
            const index3 = activePlants.indexOf(plantedSeed3);
            if (index3 > -1) {
                activePlants.splice(index3, 1);
            }
            activePlants.push(grownFlower3);
            harvest(3);
            break;
        case 4:
            const index4 = activePlants.indexOf(plantedSeed4);
            if (index4 > -1) {
                activePlants.splice(index4, 1);
            }
            activePlants.push(grownFlower4);
            harvest(4);
            break;
        default:
        console.log("🍄")
    }
}

const produceSparkle = (plopNumber) => {  
    switch(plopNumber) {
        case 0:
           activeSparkles.push(sparkle0);
           grownFlower0.produce = true;
            break;
        case 1:
            activeSparkles.push(sparkle1);
            grownFlower1.produce = true;
            break;
        case 2:
            activeSparkles.push(sparkle2);
            grownFlower2.produce = true;
            break;
        case 3:
            activeSparkles.push(sparkle3);
            grownFlower3.produce = true;
            break;
        case 4:
            activeSparkles.push(sparkle4);
            grownFlower4.produce = true;
            break;
        default:
            console.log("✨")
    }
}