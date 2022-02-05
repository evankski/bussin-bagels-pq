/* DOM SELECTORS && EVENT LISTENERS */
const canvas = document.querySelector("#canvas");
let score = 0
let gameFrame = 0
let gameLoopInterval = setInterval(gameLoop, 60)
const pressedKeys = { }
document.addEventListener('keydown', e => pressedKeys[e.key] = true)
document.addEventListener('keyup', e => pressedKeys[e.key] = false) // this is what makes the function stop when key is lifted up

/* GAMESTATE/CAVAS RENDERING */
// sets up a 2d canvas
// set canvas size to the same as window
canvas.width = 800
canvas.height = 500

const ctx = canvas.getContext("2d");
// canvas.setAttribute("height", getComputedStyle(canvas)["height"]);
// canvas.setAttribute("width", getComputedStyle(canvas)["width"]);

/* GAME FUNCTIONS */
function drawBox(x, y, width, height, color) {
    ctx.fillStyle = color
    ctx.fillRect(x, y, width, height)
  }

// class for building squares
class Ingredients {
  constructor(x, y, width, height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
  }
  render() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

// Creating the ingredients
const bagel = new Ingredients(355, 470, 90, 20, 'brown')
const bacon = new Ingredients(170, 20, 60, 20, 'red')



function movementHandler() {
    const speed = 15

    if(pressedKeys.a || pressedKeys.ArrowLeft) bagel.x -= speed
    if(pressedKeys.d || pressedKeys.ArrowRight) bagel.x += speed
    if(pressedKeys.s || pressedKeys.ArrowDown) bagel.x += speed
    if(pressedKeys.w || pressedKeys.ArrowUp) bagel.x -= speed
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    movementHandler();
    bagel.render();
    bacon.render();
}