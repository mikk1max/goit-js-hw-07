function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector("button.change-color")
const colorInfo = document.querySelector("span.color")


changeColorBtn.addEventListener("click", (event) => {
  let randomColor = getRandomHexColor()
  document.body.style.backgroundColor = randomColor
  colorInfo.textContent = randomColor
})