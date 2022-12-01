const deleteIcon=document.querySelectorAll(".task svg");
deleteIcon.forEach(el=>{
    el.addEventListener("click",function (e){
        e.target.parentElement.remove()
    })
})
const tasks=document.querySelectorAll(".task")
const addButton=document.querySelector("button")
addButton.addEventListener("click", function(){tasks.forEach(item=>item.style.display="block")})

const downSort=document.querySelector(".downArrow")
const upSort=document.querySelector(".upArrow")
const taskMain=document.querySelector(".task-main")
downSort.addEventListener("click",function(){
    upSort.style.display="block"
    downSort.style.display="none"
    const taskList=[...tasks]
    taskList.sort((a,b)=>{
        return parseInt(b.innerText)-parseInt(a.innerText)
    })
    taskMain.replaceChildren(...taskMain.children,...taskList)
})
upSort.addEventListener("click",function(){
    downSort.style.display="block"
    upSort.style.display="none"
    const taskList=[...tasks]
    taskList.sort((a,b)=>{
        return parseInt(a.innerText)-parseInt(b.innerText)
    })
    taskMain.replaceChildren(...taskMain.children,...taskList)
})
