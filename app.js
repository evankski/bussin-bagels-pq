/* DOM SELECTORS && EVENT LISTENERS */
const canvas = document.querySelector('#canvas')

/* GAMESTATE/CAVAS RENDERING */
// sets up a 2d canvas
const ctx = canvas.getContext('2d')
// set canvas size to the same as window
canvas.setAttribute("height", getComputedStyle(canvas) ["height"])
canvas.setAttribute("width", getComputedStyle(canvas)["width"])

/* GAME FUNCTIONS */

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
const bagel = new Ingredients(480, 490, 90, 20, "brown")
const bacon = new Ingredients(180, 20, 40, 20, "red")

bacon.render()
bagel.render()