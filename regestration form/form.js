
const refresh = document.querySelector('#refresh')
const verify = document.querySelector('#verify')
const submitBtn = document.querySelector('#submit')
const passVef = document.querySelector('#verify-password')



let generatedCaptcha = "";

function generateCaptcha() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    generatedCaptcha = captcha;
    document.getElementById("captcha-display").innerText = captcha;
    document.getElementById("status-message").innerText = "";
}

generateCaptcha()

refresh.addEventListener('click', () => {
    generateCaptcha()
})

function checkCaptcha() {
    const userInput = document.getElementById("user-input").value
    const statusMessage = document.getElementById("status-message")

    if (userInput == generatedCaptcha) {
        statusMessage.innerText = "CAPTCHA Verified!"
        statusMessage.style.color = "green"
    } else {
        statusMessage.innerText = "Incorrect CAPTCHA. Please try again."
        statusMessage.style.color = "red"
    }
    document.getElementById("user-input").value = ""
}

verify.addEventListener('click', () => {
    checkCaptcha()
})


submitBtn.addEventListener('click', () => {

    const conform = document.getElementById('input1').value
    const password = document.getElementById('input2').value

    if (password != conform ) {
        passVef.innerText = "password not match"
        passVef.style.color = "red"

    }

})

