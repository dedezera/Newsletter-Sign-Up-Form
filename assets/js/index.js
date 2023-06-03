const mainContainer = document.querySelector(".container")
const subscribed = document.querySelector(".subscribed")
const submitBtn = document.querySelector("#btn")
const resubmitBtn = document.querySelector(".sub-btn")
const mailSpan = document.querySelector(".userMail")
const userMailNone = document.querySelector(".valid-mail")
const formInput = document.querySelector("#mail") 

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const mailInput = document.querySelector("#mail")
    const userMail = mailInput.value

    mailSpan.textContent = userMail

    if (!userMail) {
        userMailNone.classList.remove("hide")
        formInput.style.backgroundColor = "#FFE8E6"
        formInput.style.borderColor = "#ff6257"
        return
    }

    subscribed.classList.remove("hide")
    mainContainer.style.display = "none"
})

resubmitBtn.addEventListener("click", () => {
    location.reload()
})
