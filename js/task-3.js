const textInput = document.querySelector("input#name-input")
const response = document.querySelector("span#name-output")

textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim()) {
        response.textContent = event.currentTarget.value
    } else {
        response.textContent = "Anonymous"
    }
})
