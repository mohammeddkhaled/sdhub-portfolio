const startBtn = document.querySelector('#start')
const display = document.getElementById("display")
const input = document.getElementById("minutes")

let countdown;

function startTimer() {
    const inputValue = input.value
    // clearInterval(countdown)

    if (!inputValue || inputValue <= 0) {
        alert("Please enter a valid number of minutes.")
        return;
    }

    let time = inputValue * 60

    countdown = setInterval(() => {
        const minutes = Math.floor(time / 60)
        const seconds = time % 60

        display.textContent =`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        time--

        if (time < 0) {
            clearInterval(countdown)
            display.textContent = "Time's up!"
        }
    }, 1000)
}

startBtn.addEventListener('click',()=>{
      startTimer()
      
})