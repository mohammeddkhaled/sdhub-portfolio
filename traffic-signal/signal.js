const main = document.querySelector('#parent')

const container = document.createElement('div')
const div1 = document.createElement('div')
const div2 = document.createElement('div')
const div3 = document.createElement('div')

container.classList.add('w-30', 'h-70', 'bg-black', 'p-4', 'flex', 'flex-col', 'items-center', 'justify-around', 'mr-10')
div1.classList.add('w-20', 'h-20', 'rounded-full', 'bg-gray-700')
div2.classList.add('w-20', 'h-20', 'rounded-full', 'bg-gray-700')
div3.classList.add('w-20', 'h-20', 'rounded-full', 'bg-gray-700')


function turnOnLight(light) {
    div1.classList.replace('bg-red-900', 'bg-gray-700')
    div2.classList.replace('bg-green-900', 'bg-gray-700')
    div3.classList.replace('bg-yellow-500', 'bg-gray-700')

    if (light === 'red') div1.classList.replace('bg-gray-700', 'bg-red-900')
    if (light === 'green') div2.classList.replace('bg-gray-700', 'bg-green-900')
    if (light === 'yellow') div3.classList.replace('bg-gray-700', 'bg-yellow-500')
}

function startTrafficLight() {
    turnOnLight('red');
    setTimeout(() => turnOnLight('green'), 20000)
    setTimeout(() => turnOnLight('yellow'), 10000)
}

startTrafficLight();
setInterval(startTrafficLight, 30000)


container.appendChild(div1)
container.appendChild(div2)
container.appendChild(div3)

main.appendChild(container)
