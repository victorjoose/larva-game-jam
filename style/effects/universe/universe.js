let stars = []

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  frameRate(60)
  const main = document.querySelectorAll('main')[0]
  const canvas = main.querySelector('canvas')
  main.remove()
  const el = document.getElementById('background')
  const div = document.createElement('div')
  div.className = "effect-background"
  div.appendChild(canvas)
  el.appendChild(div)
}

function draw() {
  translate(width / 2, height / 2)
  background(0)
  rectMode(CENTER)
  stroke(255, 200) // transparent white stroke

  // create a random number of stars each frame
  for (let i = 0; i < random(100); i++) {
    stars.push(new star()) // append star object
  }

  // loop through stars with a for.. of loop
  for (let s of stars) {
    s.update() // update star position
    s.display() // draw star
  }
}

function star() {
  // initialize coordinates
  this.pos = 0
  this.angle = random(0, TWO_PI)
  this.size = 1
  this.weight = 0
  
  this.update = () => {
    // coords progress
    this.pos += random(0, 30)
    this.size += pow(this.size, 0.5)
    this.weight += 0.05
    
    // delete star if past end of screen
    if (this.pos > height / 2 && this.pos > width / 2) {
      stars.splice(stars.indexOf(this), 1)
    }
  }

  this.display = () => {
    strokeWeight(this.weight)
    // draw lines
    const p1 = createVector(this.pos, this.pos).rotate(this.angle)
    const p2 = createVector(this.pos + this.size, this.pos + this.size).rotate(this.angle)
    line(p1.x, p1.y, p2.x, p2.y)
  }
}