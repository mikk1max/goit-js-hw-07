const textInput = document.querySelector("input#name-input");
const response = document.querySelector("span#name-output");

textInput.addEventListener("input", (event) => {
    const trimmedValue = event.currentTarget.value.trim();

    if (trimmedValue) {
        response.textContent = trimmedValue;
    } else {
        response.textContent = "Anonymous";
    }
});
