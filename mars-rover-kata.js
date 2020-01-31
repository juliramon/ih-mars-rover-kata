// LAB | MODULE EXERCISE: MARS ROVER KATA


// Rover Object Goes Here
// ======================

let itsRover = {
  direction: "N",
  x:0,
  y:0,
  travelLog:[{x:0,y:0}]
}

// ======================

// Function Turn Left
function turnLeft(rover){
  console.log("turnLeft was called!");
  if(rover.direction === "N"){
    rover.direction = "W";
  } else if (rover.direction === "W"){
    rover.direction = "S";
  } else if (rover.direction === "S"){
    rover.direction = "E";
  } else {
    rover.direction = "N";
  }
  console.log(`Rover is now facing: ${rover.direction}`);
}

//turnLeft(rover);

// Function Turn Right
function turnRight(rover){
  console.log("turnRight was called!");
  if(rover.direction === "N"){
    rover.direction = "E";
  } else if (rover.direction === "E"){
    rover.direction = "S";
  } else if (rover.direction === "S"){
    rover.direction = "W";
  } else {
    rover.direction = "N";
  }
  console.log(`Rover is now facing: ${rover.direction}`);
}

// turnRight(rover);

// Function Move Forward
function moveForward(rover){
  console.log("moveForward was called");
  if(rover.direction === "N"){
    rover.x--;
  } else if(rover.direction === "E"){
    rover.y++
  } else if(rover.direction === "S"){
    rover.x++;
  } else {
    rover.y--;
  }
  console.log(`Rover position is now: ${rover.x}, ${rover.y}`);
  let newPosition = {x: rover.x, y: rover.y};
  rover.travelLog.push(newPosition);
  boundaries(itsRover);
}

// moveForward(rover);

// Function Commands
function commands(commandsString){
  for(i=0; i<commandsString.length; i++){
    if(commandsString[i] === "f"){
      moveForward(itsRover);
    } else if(commandsString[i] === "b"){
      moveBackward(itsRover);
    } else if(commandsString[i] === "l"){
      turnLeft(itsRover);
    } else {
      turnRight(itsRover);
    }
  }
  console.log("\n" + "==============================" + "\n" + "Log of places explored by Rover" + "\n" + "==============================");
  for(let i=0; i< itsRover.travelLog.length; i++){
  console.log(`Step ${i} ==> x=${itsRover.travelLog[i].x}, y=${itsRover.travelLog[i].y}`);
  }
}

// BONUS 1. Function Enforce Boundaries
function boundaries(rover){
  if(rover.x < 0 || rover.y < 0 || rover.x > 10 || rover.y > 10 ){
    console.log('ALERT: Rover reached the border. Point of no return. Recalculate route.')
  }
};

// BONUS 2. Function Move Backwarads
function moveBackward(rover){
  console.log("moveBackward was called");
  if(rover.direction === "N"){
    rover.x++;
  } else if(rover.direction === "E"){
    rover.y--;
  } else if(rover.direction === "S"){
    rover.x--;
  } else {
    rover.y++;
  }
  console.log(`Rover position is now: ${rover.x}, ${rover.y}`);
  let newPosition = {x: rover.x, y: rover.y};
  rover.travelLog.push(newPosition);
  boundaries(itsRover);
}

commands("rffrfflfrffb");