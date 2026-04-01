const formEl = document.querySelector("form.login-form")

formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value.trim()
    const password = event.target.elements.password.value.trim()

    if (email === "" || password === "") {
        alert('All form fields must be filled in')
    } else {
        const userInfo = {
            email,
            password
        }

        formEl.reset()

        console.log(userInfo);
    }
})
