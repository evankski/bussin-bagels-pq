/* DOM SELECTORS && EVENT LISTENERS */
const canvas = document.querySelector("#canvas");
let score = 0
let gameFrame = 0
let gameLoopInterval = setInterval(gameLoop, 60)
const pressedKeys = { }
document.addEventListener('keydown', e => pressedKeys[e.key] = true)
document.addEventListener('keyup', e => pressedKeys[e.key] = false) // this is what makes the function stop when key is lifted up
let bottomText = document.querySelector('#bottom-text')
let gameOver = document.querySelector('#game-over')

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

// Class that builds the bagel square
class Bagels {
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
// A FOR LOOP FOR MAKING BACON FALL
const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

const fall = async() => {
    // if (i === 5) break
    for(i = 0; i < 600; i++) {
        bacon.y = bacon.y +1
        // console.log(bacon.y)
        await sleep(1)
    } 
    for(i = 0; i < 600; i++) {
        lettuce.y = lettuce.y +1
        await sleep(1)
    } 
    for(i = 0; i < 600; i++) {
        turkey.y = turkey.y +1
        await sleep(1)
    } 
    for(i = 0; i < 600; i++) {
        cockroach.y = cockroach.y +1
        await sleep(1)
    } 

}

function hitDetection() {
    if(bagel.x + bagel.width >= bacon.x &&
        bagel.x <= bacon.x + bacon.width &&
        bagel.y + bagel.height >= bacon.y &&
        bagel.y <= bacon.y + bacon.height || bagel.x + bagel.width >= lettuce.x &&
        bagel.x <= lettuce.x + lettuce.width &&
        bagel.y + bagel.height >= lettuce.y &&
        bagel.y <= lettuce.y + lettuce.height ) {
            score = score + 1
            bottomText.innerText = `Score: ${score}`
        } else if (bagel.x + bagel.width >= cockroach.x &&
            bagel.x <= cockroach.x + cockroach.width &&
            bagel.y + bagel.height >= cockroach.y &&
            bagel.y <= cockroach.y + cockroach.height) {
                clearInterval(gameLoopInterval)
                gameOver.innerText = 'GAME OVER'
            }
}


// function createBacon() {
//         bacon.render()
// }


// Creating the ingredients
const bagel = new Bagels(355, 470, 90, 20, 'brown')
let bacon = new Bagels(Math.random() * 400, -50, 60, 20, 'red')
let lettuce = new Bagels(Math.random() * 600, -50, 50, 50, 'green')
let turkey = new Bagels(Math.random() * 610, -50, 50, 15, 'pink')
let cockroach = new Bagels(Math.random() * 610, -50, 50, 25, '#C4A484')

// const bacon = new Ingredients(170, 20, 60, 20, 'red')



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
    bagel.render()
    bacon.render()
    lettuce.render()
    turkey.render()
    cockroach.render()
    hitDetection()
    // handleIngredients()
    gameFrame++
    // draw()
    // console.log(gameFrame)
}
gameLoop()
fall()