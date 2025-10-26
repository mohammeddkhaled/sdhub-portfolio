const buttons = document.querySelectorAll('#btn')
let display = document.querySelector('#display')
const equalTo = document.querySelector('#equal')
const clear = document.querySelector('#clear')
const backBtn = document.querySelector('#back')
let expression = ""

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerHTML
        expression += value
        display.innerText = expression

    })
})

equalTo.addEventListener('click', () => {

    try {
        const result = eval(expression)
        display.innerText = result
        expression = result.toString()
    } catch (error) {
        display.innerText = "error"
        expression = ""

    }

})

clear.addEventListener('click',()=>{
    display.innerText=''
    expression=""
})

backBtn.addEventListener('click',()=>{
    expression = expression.slice(0,-1)
    display.innerText = expression
})