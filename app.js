const date= document.querySelector("#date")
const list= document.querySelector("#taskList")
const element = document.querySelector("#element")
const input= document.querySelector("#addTaskInput")
const enterBtn= document.querySelector("#enterBtn")
const check= "fa-check-circle"
const uncheck= "fa-circle"
const lineThrough= "line-through"
let id
let LIST

//date function

const DATE= new Date()
date.innerHTML= DATE.toLocaleDateString("en-US", {weekday:"long", month:"short", day:"numeric"})



//add task function
function addTask(task,id,done,deleted) {

    if(deleted){return}

    const DONE= done ? check : uncheck
    const LINE= done ? lineThrough : ""

    const element= `
                        <li id="elemento">
                        <i class="far ${DONE}" data="done" id="${id}"></i>
                        <p class="text ${LINE}">${task}</p>
                        <i class="fas fa-trash de" data="deleted" id="${id}"></i>
                        </li>
                   `
    list.insertAdjacentHTML("beforeend",element)
}

//taskDone function

function taskDone(element){
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector(".text").classList.toggle(lineThrough)
    LIST[element.id].done = LIST[element.id].done ?false :true
}

//deleated task function

function deletedTask(element) {
    console.log(element.parentNode)
    console.log(element.parentNode.parentNode)
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].deleted = true
    console.log(LIST)
}


enterBtn.addEventListener("click", ()=> {
    const task= input.value
    if (task) {
       addTask(task,id,false,false) 
       LIST.push({
            name : task,
            id : id,
            done : false,
            deleted : false
       })
       localStorage.setItem("TODO",JSON.stringify(LIST))
       id++
       input.value= ''
    }
    
    
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
                deleted: false
               })
               localStorage.setItem("TODO", JSON.stringify(LIST))

               input.value = ''
               id++
               console.log(LIST)
        }
        
    }
})



list.addEventListener("click",function (event) {
    const element= event.target
    const elementData= element.attributes.data.value
    console.log(elementData)

    if(elementData == "done") {
        taskDone(element)
    }
    else if (elementData == "deleted"){
        deletedTask(element)
        console.log("deleted")
    } 
    localStorage.setItem("TODO", JSON.stringify(LIST))
})

//local storage get item

let localData = localStorage.getItem("TODO");
if (localData) {
  LIST = JSON.parse(localData);
  console.log(LIST);
  id = LIST.length;
  saveList(LIST);
} else {
  LIST = [];
  id = 0;
  saveList(LIST);
}

function saveList(array) {
    array.forEach(function(item){
        addTask(item.name,item.id,item.done,item.deleted)
    })
}


