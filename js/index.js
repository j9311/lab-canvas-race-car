let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

// roadImg.onload = animate
let roadImg = new Image()
roadImg.src = "./images/road.png"
let road = {x: 0, y: 0, w: 550, h: 700, img: roadImg}

// carImg.onload = animate
let carImg = new Image()
carImg.src = "./images/car.png"

class Car {
  constructor(x, y, w, h, img) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.img = img
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }
}

let blockImg = new Image()
blockImg.src = "./images/cone.jpg"

class Block {
  constructor(x, y, w, h, img) {
    this.x =x
    this.y =y
    this.w = w  
    this.h = h
    this.img = img
  }
  draw() {

    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }
}


/////////////////
let blockOne = new Block (
  200,
  100,
  50,
  50,
  blockImg
)

let blockTwo = new Block (
  100,
  300,
  50,
  50,
  blockImg
)

let badBlocks = [
  blockOne, blockTwo
]

// setInterval( () => {
//   badBlocks.push({
//     x:200, y:100, w:50, h:50
//   })
// }, 2000);

// function drawBlockOne() {
//     blockOne.x += 1
//     blockOne.y += 1
//     blockOne += 1
//     ctx.fillStyle = 'red'
//     ctx.fillRect(blockOne.x, blockOne.y, blockOne.w, blockOne.h)
// }


// function drawBlockTwo() {
//     blockTwo.x += 1
//     blockTwo.y += 1
//     blockTwo += 1
//     ctx.fillStyle = 'black'
//     ctx.fillRect(blockTwo.x, blockTwo.y, blockTwo.w, blockTwo.h)
// }

// function drawRectangles(){
//   for (let block of badBlocks){
//     block.y -= 1
//     ctx.fillRect(block.x, block.y, block.w, block.h)
//   }
// }

///////////////////

let toyota = new Car(255, 390, 100, 200, carImg) 

let interval = null;


function animate() {
  let gameLoop = requestAnimationFrame(animate)
  console.log("animate")
  
  ctx.drawImage(roadImg, road.x, road.y, road.w, road.h)
 ctx.drawImage(blockImg, Block.x, Block.y, Block.w, Block.h)
  toyota.draw()

}



animate()

window.onkeydown = function(e) {
  console.log(e.key)
    switch (e.key) {    
      case "ArrowLeft":
        // if (toyota.x >= 0)
        toyota.x -= 30;
       break;
      case "ArrowRight":
        // if ((toyota.x < canvas.width-toyota.w))
        toyota.x += 30;
        break
      case "ArrowUp":
        toyota.y -= 30;
       break;
      case "ArrowDown":
        toyota.y += 30;
        break
    }
}