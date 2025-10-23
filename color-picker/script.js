
const colorPicker = document.querySelector('#color-picker')

colorPicker.addEventListener('input',()=>{
    document.body.style.backgroundColor = colorPicker.value
})