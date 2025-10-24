const hours = document.querySelector('#hours')
const min = document.querySelector('#min')
const second = document.querySelector('#sec')

setInterval(() => {
    let time = new Date()

    hours.innerHTML = time.getHours()
    min.innerHTML = time.getMinutes()
    second.innerHTML = time.getSeconds()
});