const goalInput = document.querySelector('goal-input')
const newGoal = document.querySelector('#new-goal')
const container = document.querySelector('.container')

newGoal.addEventListener('click', (e) => {
    console.log(e);
    const div = document.createElement('div')
    const newInput = document.createElement('input')
    const deleteBtn = document.createElement('button')

    deleteBtn.innerText = 'delete goal'
    newInput.setAttribute('placeholder', 'new goals')



    div.classList.add('w-full', 'flex', 'gap-5')
    newInput.classList.add('w-80', 'h-full', 'p-2', 'mb-6', 'border-2',)
    deleteBtn.classList.add('h-full', 'flex', 'justify-center', 'items-center', 'bg-red-800', 'p-2')

    div.appendChild(newInput)
    div.appendChild(deleteBtn)

    container.appendChild(div)

    deleteBtn.addEventListener('click', () => {
        newInput.remove()
        deleteBtn.remove()
    })

})















