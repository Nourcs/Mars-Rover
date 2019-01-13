// Rover Object Goes Here
// ======================

let rovers = {
  "1": {
    direction: "N",
    position: {
      x: 0,
      y: 0
    },
    history: {
      x: [],
      y: []
    }
  },
  "2": {
    direction: "N",
    position: {
      x: 1,
      y: 0
    },
    history: {
      x: [],
      y: []
    }
  }
};

let obstacles = [[6, 7], [3, 1], [4, 5], [9, 8], [0, 1]];
// ======================
function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }

  console.log("turnLeft was called!");
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }

  console.log("turnRight was called!");
}

function moveForward(rover) {
  switch (rover.direction) {
    case "N":
      if (
        rover.position.y - 1 < 0 ||
        verifyObstacles(rover.position.x, rover.position.y - 1) === false
      ) {
        console.log("Obstacle Deteced!");
      } else {
        rover.position.y--;
        rover.history.x.push(rover.position.x);
        rover.history.y.push(rover.position.y);
      }
      break;
    case "E":
      if (
        rover.position.x + 1 > 9 ||
        verifyObstacles(rover.position.x + 1, rover.position.y) === false
      ) {
        console.log("Obstacle Deteced!");
      } else {
        rover.position.x++;
        rover.history.x.push(rover.position.x);
        rover.history.y.push(rover.position.y);
      }
      break;
    case "S":
      if (
        rover.position.y + 1 > 9 ||
        verifyObstacles(rover.position.x, rover.position.y + 1) === false
      ) {
        console.log("Obstacle Deteced!");
      } else {
        rover.position.y++;
        rover.history.x.push(rover.position.x);
        rover.history.y.push(rover.position.y);
      }
      break;
    case "W":
      if (
        rover.position.x - 1 < 0 ||
        verifyObstacles(rover.position.x - 1, rover.position.y) === false
      ) {
        console.log("Obstacle Deteced!");
      } else {
        rover.position.x--;
        rover.history.x.push(rover.position.x);
        rover.history.y.push(rover.position.y);
      }
      break;
  }
  console.log("moveForward was called");
  console.table(rover.history);
}

function moveBackwards(rover) {
  switch (rover.direction) {
    case "N":
      if (
        rover.position.y + 1 > 9 ||
        verifyObstacles(rover.position.x, rover.position.y + 1) === false
      ) {
        console.log("Obstacle Deteced!");
      } else {
        rover.position.y++;
        rover.history.x.push(rover.position.x);
        rover.history.y.push(rover.position.y);
      }
      break;
    case "E":
      if (
        rover.position.x - 1 < 0 ||
        verifyObstacles(rover.position.x - 1, rover.position.y) === false
      ) {
        console.log("Obstacle Deteced!");
      } else {
        rover.position.x--;
        rover.history.x.push(rover.position.x);
        rover.history.y.push(rover.position.y);
      }
      break;
    case "S":
      if (
        rover.position.y - 1 < 0 ||
        verifyObstacles(rover.position.x, rover.position.y - 1) === false
      ) {
        console.log("Obstacle Deteced!");
      } else {
        rover.position.y--;
        rover.history.x.push(rover.position.x);
        rover.history.y.push(rover.position.y);
      }
      break;
    case "W":
      if (
        rover.position.x + 1 > 9 ||
        verifyObstacles(rover.position.x + 1, rover.position.y) === false
      ) {
        console.log("Obstacle Deteced!");
      } else {
        rover.position.x++;
        rover.history.x.push(rover.position.x);
        rover.history.y.push(rover.position.y);
      }
      break;
  }
  console.log("moveBackwards was called");
  console.table(rover.history);
}

function verifyObstacles(x, y) {
  console.log("X = ", x, " Y = ", y);
  for (let i = 0; i < obstacles.length; i++) {
    if (x === obstacles[i][0] && y === obstacles[i][1]) {
      return false;
    }
  }
  for (let i in rovers) {
    if (x === rovers[i].position.x && y === rovers[i].position.y) {
      console.log("X = ", x, " Y = ", y);
      console.log(
        "Rover[",
        i,
        "].x = ",
        rovers[i].position.x,
        "Rover[",
        i,
        "].y = ",
        rovers[i].position.y
      );
      return false;
    }
  }
  return true;
}

function commands(str, rover) {
  let arr = [...str.toLowerCase()];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "f":
        moveForward(rover);
        break;
      case "b":
        moveBackwards(rover);
        break;
      default:
        console.log("Unknown Command!");
    }
  }
  // Uncomment Below for cool stuff
  // updatePos();
}

function updatePos() {
  let arr = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null]
  ];

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < obstacles.length; k++) {
        if (i === obstacles[k][1] && j === obstacles[k][0]) {
          arr[i][j] = "Obstacle";
        }
      }
    }
  }

  for (let k in rovers) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (i === rovers[k].position.y && j === rovers[k].position.x) {
          arr[i][j] = "Rover " + k;
        }
      }
    }
  }
  console.clear();
  console.table(arr);
}
