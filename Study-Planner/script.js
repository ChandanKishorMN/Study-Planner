let total = 0
let completed = 0

function addTask(){

let subject = document.getElementById("subject").value
let task = document.getElementById("task").value
let deadline = document.getElementById("deadline").value

if(subject=="" || task==""){
alert("Please enter subject and task")
return
}

let li = document.createElement("li")

li.innerHTML = `
<span onclick="completeTask(this)">
${subject} - ${task} <br> Deadline: ${deadline}
</span>

<button class="delete-btn" onclick="deleteTask(this)">Delete</button>
`

document.getElementById("taskList").appendChild(li)

total++
updateCounter()

document.getElementById("subject").value=""
document.getElementById("task").value=""
document.getElementById("deadline").value=""
}

function completeTask(element){

if(!element.classList.contains("completed")){
element.classList.add("completed")
completed++
}
else{
element.classList.remove("completed")
completed--
}

updateCounter()
}

function deleteTask(button){

let li = button.parentElement

if(li.querySelector("span").classList.contains("completed")){
completed--
}

li.remove()

total--

updateCounter()
}

function updateCounter(){

document.getElementById("total").innerText = total
document.getElementById("completed").innerText = completed
document.getElementById("remaining").innerText = total - completed

}