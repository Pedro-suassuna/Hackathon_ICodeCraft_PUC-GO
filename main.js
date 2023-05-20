const box = document.querySelector(".areaDaCamera")
const bips1 = document.querySelector(".bips1")
const bips3 = document.querySelector(".bips3")
let getLoop
let i = 0

box.addEventListener("mouseover", hoverEffectIn)
box.addEventListener("mouseout", hoverEffectOut)

bips1.volume = 0.2
bips3.volume = 0.2

function hoverEffectIn() {
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
    hoverEffectIn()
  }, 1000)
}

function hoverEffectOut() {
  box.style.backgroundColor = "transparent"

  if (i < 2) {
    i == 0
  }

  clearTimeout(getLoop)
}
