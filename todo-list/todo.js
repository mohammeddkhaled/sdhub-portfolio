const goalInput = document.querySelector('#addInput')
const addGoal = document.querySelector('#add-goal')
const container = document.querySelector('.container')

addGoal.addEventListener('click', () => {
    if (goalInput.value === '') {
        alert('Please enter a goal before adding!')
        return
    }
    const mainDiv = document.createElement('div')
    const paragraphInput = document.createElement('p')
    const deleteBtn = document.createElement('button')
    const editBtn = document.createElement('button')
    const doneBtn = document.createElement('button')

    let editInput = document.createElement('input')
    editInput.type = 'text'

    deleteBtn.innerText = 'delete goal'
    editBtn.innerText = 'edit'
    doneBtn.innerText = 'done'

    paragraphInput.innerText = goalInput.value
    goalInput.value = ''

    mainDiv.classList.add('w-full', 'flex', 'gap-5', 'mb-10')
    paragraphInput.classList.add('w-80', 'h-full', 'p-2', 'mb-6', 'border-2',)
    deleteBtn.classList.add('w-max', 'h-full', 'flex', 'justify-center', 'items-center', 'bg-red-800', 'p-2')
    editBtn.classList.add('w-max', 'h-full', 'flex', 'justify-center', 'items-center', 'bg-gray-500', 'p-2')
    doneBtn.classList.add('w-max', 'h-full', 'flex', 'justify-center', 'items-center', 'bg-green-500', 'p-2')
    editInput.classList.add('w-80', 'h-full', 'p-2', 'mb-6', 'border-2',)

    mainDiv.appendChild(paragraphInput)
    mainDiv.appendChild(deleteBtn)
    mainDiv.appendChild(editBtn)
    mainDiv.appendChild(doneBtn)

    container.appendChild(mainDiv)

    deleteBtn.addEventListener('click', () => {
        mainDiv.remove()
    })
    editBtn.addEventListener('click', () => {
        editInput.value = paragraphInput.textContent
        mainDiv.replaceChild(editInput, paragraphInput)

        doneBtn.addEventListener('click', () => {
            paragraphInput.textContent = editInput.value
            mainDiv.replaceChild(paragraphInput, editInput)
        })
    })
})