// variables
let board = document.querySelector(".board");
let highscoreBox = document.querySelector("#highscoreBox");
const gameoverAudio = new Audio("music/gameover.mp3");
const foodAudio = new Audio("music/food.mp3");
const moveAudio = new Audio("music/move.mp3");
const musicAudio = new Audio("music/music.mp3");
let inputDir = { x: 0, y: 0 };
let snakeArr = [{ x: 5, y: 3 }];
let food = { x: 10, y: 8 };
let lastPaintTime = 0;
let speed = 10;
let score = 0;

// game function starts here
function main(ctime) {
  window.requestAnimationFrame(main);

  // to check the working of ctime parameter and main function
  // console.log(ctime)

  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}

function iscollide(snake) {
  // when you bump into yourself
  for (let i = 1; i < snakeArr.length; i++) {
    if (snake[i].x === snake[0].x && snake[0].y === snake[i].y) {
      return true;
    }
  }
  // when you bump in the wall
  if (
    snake[0].x >= 18 ||
    snake[0].x <= 0 ||
    snake[0].y >= 18 ||
    snake[0].y <= 0
  ) {
    return true;
  }
  return false;
}

function gameEngine() {
  // step 1). update the snake and food
  if (iscollide(snakeArr)) {
    gameoverAudio.play();
    musicAudio.pause();
    inputDir = { x: 0, y: 0 };
    alert("game over :) , please press any key to play again");
    snakeArr = [{ x: 15, y: 13 }];
    // musicAudio.play();
    score = 0;
    scoreBox.innerHTML = "score is :";
  }

  // code for food eaten by snake & random generating food
  if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
    foodAudio.play();
    score += 1;
    if (score > hiscoreval) {
      hiscoreval = score;
      localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
      hiscoreBox.innerHTML = "High Score: " + hiscoreval;
    }
    scoreBox.innerHTML = "Score: " + score;

    snakeArr.unshift({
      x: snakeArr[0].x + inputDir.x,
      y: snakeArr[0].y + inputDir.y,
    });
    let a = 2;
    let b = 16;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }

  // Moving the snake
  for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] = { ...snakeArr[i] };
  }
  snakeArr[0].x += inputDir.x;
  snakeArr[0].y += inputDir.y;

  // step 2). display the snake and food
  // displaying the snake
  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snakebody");
    }
    board.appendChild(snakeElement);
  });
  // displaying the food
  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

// highscore saving into the local storage
let hiscore = localStorage.getItem("hiscore");
if (hiscore === null) {
  hiscoreval = 0;
  localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
} else {
  hiscoreval = JSON.parse(hiscore);
  hiscoreBox.innerHTML = "HiScore: " + hiscore;
}

// main game movement logic
window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
  inputDir = { x: 0, y: 0 }; // starting co-ordinates
  moveAudio.play();

  switch (e.key) {
    case "ArrowUp": // for up movement
      // console.log("up");
      inputDir.x = 0;
      inputDir.y = -1;
      break;

    case "ArrowDown": // for down movement
      // console.log("down");
      inputDir.x = 0;
      inputDir.y = 1;
      break;

    case "ArrowLeft": // for left movement
      // console.log("left");
      inputDir.x = -1;
      inputDir.y = 0;
      break;

    case "ArrowRight": // for right movement
      // console.log("right");
      inputDir.x = 1;
      inputDir.y = 0;
      break;

    default:
      break;
  }
});

document.querySelector(".upArrow").addEventListener("click", () => {
  console.log("up");
  inputDir = { x: 0, y: 0 }; // starting co-ordinates
  inputDir.x = 0;
  inputDir.y = -1;
});

document.querySelector(".rightArrow").addEventListener("click", () => {
  console.log("right");
  inputDir = { x: 0, y: 0 }; // starting co-ordinates
  inputDir.x = 1;
  inputDir.y = 0;
});

document.querySelector(".downArrow").addEventListener("click", () => {
  console.log("down");
  inputDir = { x: 0, y: 0 }; // starting co-ordinates
  inputDir.x = 0;
  inputDir.y = 1;
});

document.querySelector(".leftArrow").addEventListener("click", () => {
  console.log("left");
  inputDir = { x: 0, y: 0 }; // starting co-ordinates
  inputDir.x = -1;
  inputDir.y = 0;
});
