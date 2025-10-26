
const image = document.querySelector('#pic')
const background = document.querySelector('#back')
const leftButton = document.querySelector('#btn1')
const rightButton = document.querySelector('#btn2')

const imgSlider = ['images/image.png', 'images/img2.png', 'images/img3.png']
let index = 0

image.src = imgSlider[index]
// background.style.backgroundImage = `url('${index}')`;

rightButton.addEventListener('click', () => {
    // let index = 0
    index++;

    if (index >= imgSlider.length) {
        index = 0;

    }
    // console.log(index);

    image.src = imgSlider[index]
    // background.style.backgroundImage = `url('${index}')`;

})

leftButton.addEventListener('click', () => {
    
    index--;

    if (index <= 0) {
        index = 0
    }
    // console.log(index);

    image.src = imgSlider[index]
    // background.style.backgroundImage = `url('${index}')`;

})


