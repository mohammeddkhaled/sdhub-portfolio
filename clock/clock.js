const hrs = document.querySelector('#hours')
const min = document.querySelector('#min')
const second = document.querySelector('#sec')
const date = document.querySelector('#date')
const month = document.querySelector('#month')
const year = document.querySelector('#year')

setInterval(() => {
    let time = new Date()
    // Date
    date.innerHTML = time.getDate()
    month.innerHTML = time.getMonth() + 1 
    year.innerHTML = time.getFullYear()
    // Time
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    // Convert 24hr to 12hr
    hours = hours % 12
    hours = hours ? hours : 12 
    // Display
    hrs.innerHTML = hours
    min.innerHTML = minutes
    second.innerHTML = seconds
}, 1000)
