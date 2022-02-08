/* DOM SELECTORS && EVENT LISTENERS */
const canvas = document.querySelector("#canvas");
let score = 0;
let gameTime = 0;
let gameLoopInterval = setInterval(gameLoop, 60);
const pressedKeys = {};

const bagelImage = new Image();
bagelImage.src = "./img/cartoonBagel.png";

const lettuceImage = new Image();
lettuceImage.src = "./img/lettuceSlice.png"

const cockroachImage = new Image();
cockroachImage.src = "./img/newCockroach.png"

const baconImage = new Image();
baconImage.src = "./img/cartoonBacon.png"

const mayoImage = new Image();
mayoImage.src = "./img/mayoJar.png"

const tomatoImage = new Image();
tomatoImage.src = "./img/betterTomato.png"

const turkeyImage = new Image();
turkeyImage.src = "./img/cartoonSandwichMeat.png"

document.addEventListener("keydown", (e) => (pressedKeys[e.key] = true));
document.addEventListener("keyup", (e) => (pressedKeys[e.key] = false)); // this is what makes the function stop when key is lifted up
let bottomText = document.querySelector("#bottom-text");
let time = document.querySelector("#timer");
let gameOver = document.querySelector("#game-over");
let startButton = document.querySelector('#start-button-id')


/* GAMESTATE/CAVAS RENDERING */
// sets up a 2d canvas
// set canvas size to the same as window
canvas.width = 800;
canvas.height = 500;

const ctx = canvas.getContext("2d");

/* GAME FUNCTIONS */

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

class ImageBagels extends Bagels {
    constructor(x, y, color, image, width, height) {
        super(x, y, color)
        this.image = image
        this.width = width
        this.height = height
    }
    render() {
        // console.log(this.image.src)
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        // ctx.drawImage(this.image, this.x, this.y);
    }
}



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
let spawnInterval = setInterval(randomSpawn, 6000);

const timeAdd = () => {
  gameTime = gameTime + 1;
  gameTimeTimer = 30 - gameTime;
  timer.innerText = `${gameTimeTimer} Seconds left`;
};
let timeInterval = setInterval(timeAdd, 1000);

const timesUp = () => {
  if (gameTime === 30) {
    clearInterval(spawnInterval);
    clearInterval(timeInterval);
    clearInterval(gameLoopInterval);
    gameOver.innerText = `Time's up!`;
  }
};

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



function hitDetection() {
  if 
    (bagel.x + bagel.width >= bacon.x &&
      bagel.x <= bacon.x + bacon.width &&
      bagel.y + bagel.height >= bacon.y &&
      bagel.y <= bacon.y + bacon.height) {
        score = score + 1;
    bottomText.innerText = `Score: ${score}`;
    bacon.y = -800
      } else if(bagel.x + bagel.width >= lettuce.x &&
        bagel.x <= lettuce.x + lettuce.width &&
        bagel.y + bagel.height >= lettuce.y &&
        bagel.y <= lettuce.y + lettuce.height) { 
          score = score + 1;
          bottomText.innerText = `Score: ${score}`;
          lettuce.y = -800
      } else if(bagel.x + bagel.width >= turkey.x &&
        bagel.x <= turkey.x + turkey.width &&
        bagel.y + bagel.height >= turkey.y &&
        bagel.y <= turkey.y + turkey.height) {
          score = score + 1;
          bottomText.innerText = `Score: ${score}`;
          turkey.y = -800
      } else if (bagel.x + bagel.width >= tomato.x &&
        bagel.x <= tomato.x + tomato.width &&
        bagel.y + bagel.height >= tomato.y &&
        bagel.y <= tomato.y + tomato.height){
          score = score + 1;
          bottomText.innerText = `Score: ${score}`;
          tomato.y = -800
        } else if (bagel.x + bagel.width >= mayo.x &&
          bagel.x <= mayo.x + mayo.width &&
          bagel.y + bagel.height >= mayo.y &&
          bagel.y <= mayo.y + mayo.height) {
            score = score + 1;
          bottomText.innerText = `Score: ${score}`;
          mayo.y = -800
          } else if (
            bagel.x + bagel.width >= cockroach.x &&
            bagel.x <= cockroach.x + cockroach.width &&
            bagel.y + bagel.height >= cockroach.y &&
            bagel.y <= cockroach.y + cockroach.height
          ) {
            clearInterval(gameLoopInterval);
            clearInterval(timeInterval);
            gameOver.innerText = "GAME OVER";
          }
        }

// Creating the ingredients
const bagel = new ImageBagels(200, 350, "brown", bagelImage, 120, 120); //width then height
let lettuce = new ImageBagels(Math.random() * 500, -150, "green", lettuceImage, 110, 90);
let bacon = new ImageBagels(Math.random() * 500, -50,"red", baconImage ,100, 60,);
let turkey = new ImageBagels(Math.random() * 500, -250,"brown", turkeyImage, 105, 90,);
let cockroach = new ImageBagels(Math.random() * 400, -430, "brown", cockroachImage, 60, 60,);
let tomato = new ImageBagels(Math.random() * 500, -400,"red", tomatoImage, 80, 80,);
let mayo = new ImageBagels(Math.random() * 500, -350,"white",mayoImage ,80, 100,);

// const bacon = new Ingredients(170, 20, 60, 20, 'red')

function movementHandler() {
  const speed = 25;

  if (pressedKeys.a || pressedKeys.ArrowLeft) bagel.x -= speed;
  if (pressedKeys.d || pressedKeys.ArrowRight) bagel.x += speed;
  if (pressedKeys.s || pressedKeys.ArrowDown) bagel.x += speed;
  if (pressedKeys.w || pressedKeys.ArrowUp) bagel.x -= speed;
}


function gameLoop() {
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
gameLoop();