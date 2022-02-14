/* BASIC VARIABLES */
const canvas = document.querySelector("#canvas");

let score = 0;
let gameTime = 0;
let gameLoopInterval;
const pressedKeys = {};



/* VARIABLES FOR ALL IMAGES */
const bagelImage = new Image();
bagelImage.src = "./img/cartoonBagel.png";

const lettuceImage = new Image();
lettuceImage.src = "./img/lettuceSlice.png";

const cockroachImage = new Image();
cockroachImage.src = "./img/newCockroach.png";

const baconImage = new Image();
baconImage.src = "./img/cartoonBacon.png";

const mayoImage = new Image();
mayoImage.src = "./img/mayoJar.png";

const tomatoImage = new Image();
tomatoImage.src = "./img/betterTomato.png";

const turkeyImage = new Image();
turkeyImage.src = "./img/cartoonSandwichMeat.png";

/* AUDIO VARIABLES */
const timerAudio = new Audio("./audio/countdownSound.mp3");

const itemSound = new Audio("./audio/collectItem.mp3");
const itemSound2 = new Audio("./audio/collectItem.mp3");
const itemSound3 = new Audio("./audio/collectItem.mp3");
const itemSound4 = new Audio("./audio/collectItem.mp3");
const itemSound5 = new Audio("./audio/collectItem.mp3");

const loseSound = new Audio("./audio/loseSound.mp3");

timerAudio.volume = 0.2
itemSound.volume = 0.2
itemSound2.volume = 0.2
itemSound3.volume = 0.2
itemSound4.volume = 0.2
itemSound5.volume = 0.2
/* KEYSTROKE EVENT LISTENERS */
document.addEventListener("keydown", (e) => (pressedKeys[e.key] = true));
document.addEventListener("keyup", (e) => (pressedKeys[e.key] = false)); // this is what makes the function stop when key is lifted up

/* DOM SELECTORS */
let bottomText = document.querySelector("#bottom-text");
let time = document.querySelector("#timer");
let gameOver = document.querySelector("#game-over");
let startButton = document.querySelector("#start-button-id");
let restartButton = document.querySelector("#restart-button");
let instructions = document.querySelector('.instructions');
let restartP = document.querySelector('.restart-par')

/* GAMESTATE/CAVAS RENDERING */
// sets up a 2d canvas
// set canvas size to the same as window
canvas.width = 800;
canvas.height = 500;

const ctx = canvas.getContext("2d");

/* GAME FUNCTIONS */

/* ORIGINAL CLASS FOR MAKING INGREDIENTS */
class Bagels {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    // this.image = image;
    // this.width = width;
    // this.height = height;
    this.color = color;
    this.alive = true;
  }
  render() {
    // ctx.drawImage = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

/* SPAWNS IN AN IMAGE IN PLACE OF THE OLD BOXES */
class ImageBagels extends Bagels {
  constructor(x, y, color, image, width, height) {
    super(x, y, color);
    this.image = image;
    this.width = width;
    this.height = height;
  }
  render() {
    // console.log(this.image.src)
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    // ctx.drawImage(this.image, this.x, this.y);
  }
}

/* RESETS ALL INGREDIENTS EVERYTIME THEY HIT THE BOTTOM OF THE PAGE */
// RANDOMLY CHANGES THE X AND Y AXIS ON AN INTERVAL
const randomSpawn = () => {
  bacon.y = Math.random() * -300;
  lettuce.y = Math.random() * -300;
  turkey.y = Math.random() * -300;
  cockroach.y = -350;
  tomato.y = Math.random() * -300;
  mayo.y = Math.random() * -300;

  bacon.x = Math.random() * 750;
  lettuce.x = Math.random() * 750;
  turkey.x = Math.random() * 750;
  cockroach.x = Math.random() * 700;
  tomato.x = Math.random() * 750;
  mayo.x = Math.random() * 750;
};
let spawnInterval;

/* CREATES THE GAME TIMER */
const timeAdd = () => {

  gameTime = gameTime + 1;
  gameTimeTimer = 30 - gameTime;
  timer.innerText = `${gameTimeTimer} Seconds left`;
};
let timeInterval;

/* STOPS ALL INTERVALS WHEN GAME TIME IS UP */
const timesUp = () => {
  if (gameTime === 30) {
    clearInterval(spawnInterval);
    clearInterval(timeInterval);
    clearInterval(gameLoopInterval);
    timerAudio.pause();
    gameOver.innerText = `Time's up! Your score is ${score}`;
    // restartButton.classList.remove('hide')
    bottomText.classList.add('hide')
  }
};

// const startGame = () => {
//   setTimeout(setInterval(gameLoop, 60), 5000)
//   setTimeout(setInterval(timeAdd, 1000), 5000)
//   setTimeout(setInterval(randomSpawn, 6000), 5000)
//   // setTimeout(timerAudio.play, 5000)
// }
// startButton.addEventListener("click", function() {
//   setInterval(gameLoop, 60)
//   setInterval(timeAdd, 1000);
//   setInterval(randomSpawn, 6000);
//   });

/* RESPONISBLE FOR DROPPING ALL INGREDIENTS FROM TOP OF PAGE */
// JUST ADDS TO THE Y AXIS EVERY FRAME
const fall = () => {
  for (i = 0; i < 10; i++) {
    bacon.y = bacon.y + 1;
  }
  for (i = 0; i < 10; i++) {
    lettuce.y = lettuce.y + 1;
  }
  for (i = 0; i < 10; i++) {
    turkey.y = turkey.y + 1;
  }
  for (i = 0; i < 10; i++) {
    cockroach.y = cockroach.y + 1;
  }
  for (i = 0; i < 10; i++) {
    tomato.y = tomato.y + 1;
  }
  for (i = 0; i < 10; i++) {
    mayo.y = mayo.y + 1;
  }
};

/* IN CHARGE OF ALL HIT DETECTION */
function hitDetection() {
  if (
    bagel.x + bagel.width >= bacon.x &&
    bagel.x <= bacon.x + bacon.width &&
    bagel.y + bagel.height >= bacon.y &&
    bagel.y <= bacon.y + bacon.height
  ) {
    score = score + 1;
    bottomText.innerText = `Score: ${score}`;
    bacon.y = -800;
    itemSound.play()
  } else if (
    bagel.x + bagel.width >= lettuce.x &&
    bagel.x <= lettuce.x + lettuce.width &&
    bagel.y + bagel.height >= lettuce.y &&
    bagel.y <= lettuce.y + lettuce.height
  ) {
    score = score + 1;
    bottomText.innerText = `Score: ${score}`;
    lettuce.y = -800;
    itemSound2.play()
  } else if (
    bagel.x + bagel.width >= turkey.x &&
    bagel.x <= turkey.x + turkey.width &&
    bagel.y + bagel.height >= turkey.y &&
    bagel.y <= turkey.y + turkey.height
  ) {
    score = score + 1;
    bottomText.innerText = `Score: ${score}`;
    turkey.y = -800;
    itemSound3.play()
  } else if (
    bagel.x + bagel.width >= tomato.x &&
    bagel.x <= tomato.x + tomato.width &&
    bagel.y + bagel.height >= tomato.y &&
    bagel.y <= tomato.y + tomato.height
  ) {
    score = score + 1;
    bottomText.innerText = `Score: ${score}`;
    tomato.y = -800;
    itemSound4.play()
  } else if (
    bagel.x + bagel.width >= mayo.x &&
    bagel.x <= mayo.x + mayo.width &&
    bagel.y + bagel.height >= mayo.y &&
    bagel.y <= mayo.y + mayo.height
  ) {
    score = score + 1;
    bottomText.innerText = `Score: ${score}`;
    mayo.y = -800;
    itemSound5.play()
  } else if (
    bagel.x + bagel.width >= cockroach.x &&
    bagel.x <= cockroach.x + cockroach.width &&
    bagel.y + bagel.height >= cockroach.y &&
    bagel.y <= cockroach.y + cockroach.height
  ) {
    clearInterval(gameLoopInterval);
    clearInterval(timeInterval);
    clearInterval(spawnInterval)
    timerAudio.pause();
    loseSound.play();
    gameOver.innerText = `GAME OVER! Your score is ${score}`;
    restartButton.classList.remove('hide')
    bottomText.classList.add('hide')
    // gameOver.classList.remove('hide')
  }
}

/* CREATES ALL INGREDIENTS */
const bagel = new ImageBagels(200, 350, "brown", bagelImage, 120, 120); //width then height
let lettuce = new ImageBagels(
  Math.random() * 500,
  -150,
  "green",
  lettuceImage,
  110,
  70
);
let bacon = new ImageBagels(
  Math.random() * 500,
  -50,
  "red",
  baconImage,
  100,
  60
);
let turkey = new ImageBagels(
  Math.random() * 500,
  -250,
  "brown",
  turkeyImage,
  105,
  90
);
let cockroach = new ImageBagels(
  Math.random() * 400,
  -430,
  "brown",
  cockroachImage,
  60,
  60
);
let tomato = new ImageBagels(
  Math.random() * 500,
  -400,
  "red",
  tomatoImage,
  80,
  80
);
let mayo = new ImageBagels(
  Math.random() * 500,
  -350,
  "white",
  mayoImage,
  80,
  100
);

// const bacon = new Ingredients(170, 20, 60, 20, 'red')

/* MAKES ARROW KEYS AND WASD MOVE BAGEL */
function movementHandler() {
  const speed = 25;

  if (pressedKeys.a || pressedKeys.ArrowLeft) bagel.x -= speed;
  if (pressedKeys.d || pressedKeys.ArrowRight) bagel.x += speed;
  if (pressedKeys.s || pressedKeys.ArrowDown) bagel.x += speed;
  if (pressedKeys.w || pressedKeys.ArrowUp) bagel.x -= speed;
}

/* EVERYTHING THAT HAPPENS WITHIN THE GAME */
function gameLoop() {
  timerAudio.play();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  movementHandler();
  bacon.render();
  lettuce.render();
  turkey.render();
  tomato.render();
  mayo.render();
  cockroach.render();
  fall();
  bagel.render();
  hitDetection();
  timesUp();
}
// gameLoop();

const startGame = () => {
gameLoopInterval = setInterval(gameLoop, 60)
timeInterval = setInterval(timeAdd, 1000);
spawnInterval = setInterval(randomSpawn, 6000);
}


// startButton.addEventListener("click", startGame);


startButton.addEventListener("click", function() {
startGame()
startButton.classList.add('hide')
instructions.classList.add('hide')
restartButton.classList.remove('hide')
restartP.classList.add('hide')
bottomText.classList.remove('hide')
// gameOver.classList.remove('hide')
});

restartButton.addEventListener("click", function(){
  bacon.y = -50
  lettuce.y = -150
  tomato.y = -400
  mayo.y = -350
  turkey.y = -250
  cockroach.y = -430
  bagel.x = 200
  gameTime = 0
  score = 0
  timerAudio.pause();
  startButton.classList.remove('hide')
  restartButton.classList.add('hide')
  restartP.classList.remove('hide')
  // gameOver.classList.add('hide')
  gameOver.innerText = ''

  clearInterval(spawnInterval);
    clearInterval(timeInterval);
    clearInterval(gameLoopInterval)

})