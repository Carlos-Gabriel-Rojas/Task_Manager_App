const date= document.querySelector("#date")
const list= document.querySelector("#taskList")
const input= document.querySelector("#addTaskInput")
const enterBtn= document.querySelector("#enterBtn")
const check= "fa-check-circle"
const uncheck= "fa-circle"
const lineThrough= "line-through"
let id= 0
const LIST= []

//date function

const DATE= new Date()
date.innerHTML= DATE.toLocaleDateString("en-US", {weekday:"long", month:"short", day:"numeric"})


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
       LIST.push({
        name: task,
        id: id,
        done: false,
        deleated: false
       })
    }
    input.value=""
    id++
})

document.addEventListener("keyup",function (event) {
    if(event.key == "Enter") {
        const task= input.value
        if (task) {
            addTask(task,id,false,false)   
            LIST.push({
                name: task,
                id: id,
                done: false,
                deleated: false
               })
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
    LIST[element.id].done= LIST[element, id].done ?false :true
}

//deleated task function

function deleatedTask(element) {
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].deleated = true
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