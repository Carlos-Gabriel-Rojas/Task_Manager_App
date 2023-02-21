const date= document.querySelector("#date")
const list= document.querySelector("#taskList")
const input= document.querySelector("#addTaskInput")
const enterBtn= document.querySelector("#enterBtn")
const check= "fa-check-circle"
const uncheck= "fa-circle"
const lineThrough= "line-through"
const id= 0

//add task function
function addTask(task,id,done,deleated) {
    const element= `<li id="element">
                    <i class="far fa-cicle co" data="done" id="0"></i>
                    <p class="text">${task}</p>
                    <i class="fas fa-trash de" data="deleted" id="0"></i>
                    </li>
                   `
    list.insertAdjacentHTML("beforeend",element)
}

enterBtn.addEventListener("click", ()=> {
    const task= input.value
    if (task) {
       addTask(task,id,false,false) 
    }
    input.value=""
    id++
})

document.addEventListener("keyup",function (event) {
    if(event.key == "Enter") {
        const task= input.value
        if (task) {
            addTask(task,id,false,false)   
        }
        input.value=""
        id++
    }
})