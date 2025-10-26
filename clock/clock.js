const hours = document.querySelector('#hours')
const min = document.querySelector('#min')
const second = document.querySelector('#sec')
const date = document.querySelector('#date')
const month = document.querySelector('#month')
const year = document.querySelector('#year')

setInterval(() => {
    let time = new Date()
    date.innerHTML = time.getDate()
    month.innerHTML = time.getMonth()
    year.innerHTML = time.getFullYear()
    
    hours.innerHTML = time.getHours()
    min.innerHTML = time.getMinutes()
    second.innerHTML = time.getSeconds()
});