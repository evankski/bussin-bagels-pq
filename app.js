/* DOM SELECTORS && EVENT LISTENERS */
const canvas = document.querySelector("#canvas");
let score = 0;
let gameTime = 0;
let gameLoopInterval = setInterval(gameLoop, 60);
const pressedKeys = {};

const bagelImage = new Image();
bagelImage.src = "./img/bagelPNG.png";
bagelImage.width = 10
bagelImage.height = 10



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
// canvas.setAttribute("height", getComputedStyle(canvas)["height"]);
// canvas.setAttribute("width", getComputedStyle(canvas)["width"]);

/* GAME FUNCTIONS */


// function drawBox(x, y, width, height, color) {
//     ctx.fillStyle = color;
//     ctx.fillRect(x, y, width, height);
// }

// Class that builds the bagel square
// class Bagels {
    //   constructor(x, y, width, height, image,) {
        //     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.image = image;
//   }
//   render() {
//     ctx.drawImage = this.image;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   }
// }
// }
// class Bagels {
//   constructor(x, y, width, height, color, type) {

//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     // this.color = color;
//     this.alive = true;
//   }
//   render() {
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   }
// }
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
        console.log(this.image.src)
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        // ctx.drawImage(this.image, this.x, this.y);
    }
}




// A FOR LOOP FOR MAKING BACON FALL
// const sleep = (time) => {
//   return new Promise((resolve) => setTimeout(resolve, time));
// };

const randomSpawn = () => {
  bacon.y = Math.random() * -300;
  lettuce.y = Math.random() * -300;
  turkey.y = Math.random() * -300;
  cockroach.y = Math.random() * -300;
  tomato.y = Math.random() * -300;
  mayo.y = Math.random() * -300;

  bacon.x = Math.random() * 750;
  lettuce.x = Math.random() * 750;
  turkey.x = Math.random() * 750;
  cockroach.x = Math.random() * 750;
  tomato.x = Math.random() * 750;
  mayo.x = Math.random() * 750;
};
let spawnInterval = setInterval(randomSpawn, 5000);

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
  // if (i === 5) break
  for (i = 0; i < 10; i++) {
    bacon.y = bacon.y + 1;
    // console.log(bacon.y)
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
// const fall = async () => {
//   // if (i === 5) break
//   for (i = 0; i < 600; i++) {
//     bacon.y = bacon.y + 1.3;
//     // console.log(bacon.y)
//     await sleep(1);
//   }
//   for (i = 0; i < 600; i++) {
//     lettuce.y = lettuce.y + 1.3;
//     await sleep(0.5);
//   }
//   for (i = 0; i < 600; i++) {
//     turkey.y = turkey.y + 1.3;
//     await sleep(0.5);
//   }
//   for (i = 0; i < 600; i++) {
//     cockroach.y = cockroach.y + 1.7;
//     await sleep(0.5);
//   }
// };

function hitDetection() {
  if (
    (bagel.x + bagel.width >= bacon.x &&
      bagel.x <= bacon.x + bacon.width &&
      bagel.y + bagel.height >= bacon.y &&
      bagel.y <= bacon.y + bacon.height) ||
    (bagel.x + bagel.width >= lettuce.x &&
      bagel.x <= lettuce.x + lettuce.width &&
      bagel.y + bagel.height >= lettuce.y &&
      bagel.y <= lettuce.y + lettuce.height) ||
    (bagel.x + bagel.width >= turkey.x &&
      bagel.x <= turkey.x + turkey.width &&
      bagel.y + bagel.height >= turkey.y &&
      bagel.y <= turkey.y + turkey.height) ||
    (bagel.x + bagel.width >= tomato.x &&
      bagel.x <= tomato.x + tomato.width &&
      bagel.y + bagel.height >= tomato.y &&
      bagel.y <= tomato.y + tomato.height) ||
    (bagel.x + bagel.width >= mayo.x &&
      bagel.x <= mayo.x + mayo.width &&
      bagel.y + bagel.height >= mayo.y &&
      bagel.y <= mayo.y + mayo.height)
  ) {
    score = score + 1;
    bottomText.innerText = `Score: ${score}`;
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

// function createBacon() {
//         bacon.render()
// }

// Creating the ingredients
// const bagel = new Bagels(355, 470, 90, 20, "./img/bagelPNG.png", "image");
// const bagel = new ImageBagels(200, 470, "brown", bagelImage);
const bagel = new ImageBagels(200, 370, "brown", bagelImage, 100, 100);
let bacon = new Bagels(Math.random() * 500, -50, 60, 20, "red");
let lettuce = new Bagels(Math.random() * 500, -150, 50, 50, "green");
let turkey = new Bagels(Math.random() * 500, -250, 50, 15, "pink");
let cockroach = new Bagels(Math.random() * 500, -350, 50, 25, "#C4A484");
let tomato = new Bagels(Math.random() * 500, -400, 60, 60, "maroon");
let mayo = new Bagels(Math.random() * 500, -450, 60, 60, "white");

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
  cockroach.render();
  tomato.render();
  mayo.render();
  // randomSpawn()
  fall();
  bagel.render();
  hitDetection();
  timesUp();
  // handleIngredients()
  // draw()
  // console.log(gameFrame)
}
gameLoop();
// startButton.addEventListener("click", allIntervals)