const box = document.querySelector(".areaDaCamera")
const bips1 = document.querySelector(".bips1")
const bips3 = document.querySelector(".bips3")
let getLoop
let i = 0

box.addEventListener("mouseover", hoverEffectIn)
box.addEventListener("mouseout", hoverEffectOut)

function hoverEffectIn() {
  repetition()
}

function hoverEffectOut() {
  box.style.backgroundColor = "transparent"
  clearTimeout(getLoop)
}

function repetition() {
  getLoop = setTimeout(function () {
    i++
    if ((i >= 2 && i <= 7) || (i > 15 && i <= 18)) {
      box.style.backgroundColor = "rgba(255, 0, 0, 0.205)"
      bips1.play()
    }

    if ((i > 7 && i <= 15) || (i > 19 && i <= 29)) {
      box.style.backgroundColor = "rgba(0, 255, 0, 0.205)"
      bips3.play()
    }
    repetition()
  }, 1000)
}

var Draggable = function (elemento) {
  var that = this
  this.elemento = elemento
  this.posX = 0
  this.posY = 0
  this.top = 0
  this.left = 0
  this.refMouseUp = function (event) {
    that.onMouseUp(event)
  }

  this.refMouseMove = function (event) {
    that.onMouseMove(event)
  }

  this.elemento.addEventListener("mousedown", function (event) {
    that.onMouseDown(event)
  })
}

Draggable.prototype.onMouseDown = function (event) {
  this.posX = event.x
  this.posY = event.y

  this.elemento.classList.add("dragging")
  window.addEventListener("mousemove", this.refMouseMove)
  window.addEventListener("mouseup", this.refMouseUp)
}

Draggable.prototype.onMouseMove = function (event) {
  var diffX = event.x - this.posX
  var diffY = event.y - this.posY
  this.elemento.style.top = this.top + diffY + "px"
  this.elemento.style.left = this.left + diffX + "px"
}

Draggable.prototype.onMouseUp = function (event) {
  this.top = parseInt(this.elemento.style.top.replace(/\D/g, "")) || 0
  this.left = parseInt(this.elemento.style.left.replace(/\D/g, "")) || 0
  this.elemento.classList.remove("dragging")
  window.removeEventListener("mousemove", this.refMouseMove)
  window.removeEventListener("mouseup", this.refMouseUp)
}

var draggables = document.querySelectorAll(".draggable")
;[].forEach.call(draggables, function (draggable, indice) {
  new Draggable(draggable)
})
