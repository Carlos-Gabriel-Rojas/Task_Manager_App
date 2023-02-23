const date= document.querySelector("#date")
const list= document.querySelector("#taskList")
const input= document.querySelector("#addTaskInput")
const enterBtn= document.querySelector("#enterBtn")
const check= "fa-check-circle"
const uncheck= "fa-circle"
const lineThrough= "line-through"
let id= 0

//add task function
function addTask(task,id,done,deleated) {

    if(deleated){return}

    const DONE= done ?check :uncheck
    const LINE= done ?lineThrough :""

    const element= `<li id="element">
                    <i class="far ${DONE}" data="done" id="${id}"></i>
                    <p class="text ${LINE}">${task}</p>
                    <i class="fas fa-trash de" data="deleted" id="${id}"></i>
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

//taskDone function

function taskDone(element){
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector(".text").classList.toggle(lineThrough)
}

//deleated task function

function deleatedTask(element) {
    element.parentNode.parentNode.removeChild(element.parentNode)
}





list.addEventListener("click",function (event) {
    const element= event.target
    const elementData= element.attributes.data.value
    if(elementData === "done") {
        taskDone(element)
    }
    else if (elementData === "deleated"){
        deleatedTask(element)
    } 
})