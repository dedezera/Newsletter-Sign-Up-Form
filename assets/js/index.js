const mainContainer = document.querySelector(".container")
const subscribed = document.querySelector(".subscribed")
const submitBtn = document.querySelector("#btn")
const resubmitBtn = document.querySelector(".sub-btn")
const mailSpan = document.querySelector(".userMail")


submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const mailInput = document.querySelector("#mail")
    const userMail = mailInput.value
    mailSpan.textContent = userMail

    subscribed.classList.remove("hide")
    mainContainer.style.display = "none"
})

resubmitBtn.addEventListener("click", () => {
    location.reload()
})