const dlbutton = document.querySelector('.dl_btn')
const body = document.querySelector('body')
const input = document.querySelector('input')
const inputbutton = document.querySelector('.addtask_btn')
const parent = document.querySelector('.list_items')
const deletebutton = document.querySelector('.fa-times')
const listitem = document.querySelector('ul')
const clearbutton = document.querySelector('.clr_btn')

var arr = []

//dark light mode toggling
const dlbutton_callbackfuntion = (() => {
    body.classList.toggle('dark')
})
dlbutton.addEventListener('click', dlbutton_callbackfuntion)

//input into list
const inputbutton_callback = () => {
    iteminput = { task: input.value, status: 'pending' }
    if (arr.includes(iteminput)) {
        alert("already exsits")
    } else {
        const template = `
                <div class="checkbutton">
                    <i class="fa fa-check-circle"></i>
                </div>
                <div class="item">
                    <p>${iteminput.task}<p>   
                </div>
                <div class="list_tools">
                    <i class="fa fa-times"></i>
                    <i class="fas fa-bars"></i>
                </div>
                `
        const newitem = document.createElement('li')
        newitem.setAttribute('class', 'items')
        newitem.innerHTML = template
        newi = listitem.appendChild(newitem)
        parent.appendChild(newi)
        arr.push(iteminput)
    }
}

// arr.forEach(inputbutton_callback)
inputbutton.addEventListener('click', () => {
    inputbutton_callback()
    console.log(arr)
})

// clear button 
clearbutton.addEventListener('click', () => {
    parent.innerHTML = null
    arr = []
    console.log(arr)
})

// const deletebutton_callback = (event) => {
//     arr.forEach((ele, index) => {
//         if (ele == event.target) {
//             listitem[index].remove();
//             arr.splice(index, 1);
//         }
//     })
// }

// deletebutton.addEventListener('click', (event) => {
//     deletebutton_callback(event)
//     console.log(arr)
// })