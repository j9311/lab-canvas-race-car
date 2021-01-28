let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

// roadImg.onload = animate //
let roadImg = new Image()
roadImg.src = "./images/finalfrontier.png"
let road = {x: 0, y: 0, w: 550, h: 700, img: roadImg}

// carImg.onload = animate //
let muskImg = new Image()
muskImg.src = "./images/elon.png"

//mr musk//
class Musk {
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
blockImg.src = "./images/jb.png"


let speedMultiplier = 1;
let startSpeed = 1;
// herr bezos//
class Block {
  constructor(x, y, w, h, img) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.img = img
  }
  draw() {
    this.y += startSpeed*speedMultiplier;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }
  collisionDetection(this, punishedElon)
}

//blob.assign//
let blockOne = new Block (Math.random()*canvas.width, 0, 75, 75, blockImg)
// let blockTwo = new Block (Math.random()*canvas.width, 0, 75, 75, blockImg)
// let blockThree = new Block (Math.random()*canvas.width, 0, 75, 75, blockImg)
let punishedElon = new Musk((canvas.width/2 - 150/2), (canvas.height/2 + 150), 95, 150, muskImg) 

let blocks = []

//working area//
setInterval(function () {
  console.log('check')
  let blockOne = new Block (Math.random()*400, 0, 75, 75, blockImg)
  blocks.push(blockOne)
  console.log(blocks)
}, 1000)


function drawBezosOne() {
  for (blockOne of blocks) {
      blockOne.draw()
  }
}

setInterval(function () {
  console.log('check')
  let blockTwo = new Block (Math.random()*400, 0, 75, 75, blockImg)
  speedMultiplier = Math.min(speedMultiplier + .02, 3)
  blocks.push(blockTwo)
  console.log(blocks)
}, 1000)


function drawBezosTwo() {
  for (blockTwo of blocks) {
      blockTwo.draw()
  }
}

setInterval(function () {
  console.log('check')
  let blockThree = new Block (Math.random()*400, 0, 75, 75, blockImg)
  blocks.push(blockThree)
  console.log(blocks)
}, 1000)


function drawBezosThree() {
  for (blockThree of blocks) {
      blockThree.draw()
  }
}

// function movingBlock () {
//   speed1 += 3;
//   speed2 += 4;
//   speed3 += 7;

  
// }



function collisionDetection(punishedElon, Block) {

  if (punishedElon.x < Block.x + Block.w &&
      punishedElon.x + punishedElon.w > Block.x &&
      punishedElon.y < Block.y + Block.h &&
      punishedElon.y + punishedElon.h > Block.y) {
      // collision detected!
      alert('collision detected')
      console.log('collision!!!')
      cancelAnimationFrame(interval)
  }
}


let interval=null

//engine//
function animate() {
  let gameLoop = requestAnimationFrame(animate)
  console.log("animate")
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(roadImg, road.x, road.y, road.w, road.h)
  // blockOne.draw()
  // blockTwo.draw()
  // blockThree.draw()
  punishedElon.draw()
  drawBezosOne()
  drawBezosTwo()
  drawBezosThree()
}
animate()



//controls//
window.onkeydown = function(e) {
  console.log(e.key)
    switch (e.key) {    
      case "ArrowLeft":
       if (punishedElon.x >= 0)
       punishedElon.x -= 50;
       break;
      case "ArrowRight":
         if ((punishedElon.x < canvas.width-punishedElon.w))
         punishedElon.x += 50;
        break
      case "ArrowUp":
        if (punishedElon.y > 0)
        punishedElon.y -= 50;
       break;
      case "ArrowDown":
        if (punishedElon.y < canvas.height-punishedElon.h)
        punishedElon.y += 50;
        break
    }
}