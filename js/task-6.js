function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]")
const destroyBtn = document.querySelector("button[data-destroy]")
const boxContainer = document.querySelector("#boxes")
const inputValue = document.querySelector("#controls input")

const newBox = (step = 0) => {
  const box = document.createElement("div")
  box.style.width = `${30+step}px`
  box.style.height = `${30+step}px`
  box.style.backgroundColor = getRandomHexColor()
  return box
} 

createBtn.addEventListener("click", () => {
  boxContainer.innerHTML = ""
  if (Number(inputValue.value) >= 1 && Number(inputValue.value) <= 100) {
    const fragment = document.createDocumentFragment()
    let step = 0

    for (let i = 0; i < inputValue.value; i++) {
      fragment.append(newBox(step))
      step += 10
    }

    boxContainer.append(fragment)
  } else {
    alert("Please enter a number between 1 and 100.");
  }
})

destroyBtn.addEventListener("click", () => {
  boxContainer.innerHTML = ""
  inputValue.value = ""
})