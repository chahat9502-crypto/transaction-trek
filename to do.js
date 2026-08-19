let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {

    let text = document.getElementById("taskInput").value.trim();

    if(text==""){
        alert("Task cannot be empty");
        return;
    }

    let category=document.getElementById("category").value;
    let priority=document.getElementById("priority").value;
    let due=document.getElementById("dueDate").value;

    tasks.push({
        text,
        category,
        priority,
        due,
        completed:false
    });

    document.getElementById("taskInput").value="";
    saveTasks();
    displayTasks();
}

function displayTasks(){

    let list=document.getElementById("taskList");
    list.innerHTML="";

    let search=document.getElementById("search").value.toLowerCase();
    let filter=document.getElementById("filter").value;

    let completed=0;
    let pending=0;

    tasks.forEach((task,index)=>{

        if(task.completed) completed++;
        else pending++;

        if(task.text.toLowerCase().indexOf(search)==-1) return;

        if(filter=="completed" && !task.completed) return;
        if(filter=="pending" && task.completed) return;

        let li=document.createElement("li");

        if(task.completed)
            li.classList.add("completed");

        li.innerHTML=`

        <div>

        <strong>${task.text}</strong><br>

        Category : ${task.category}<br>

        Priority : ${task.priority}<br>

        Due : ${task.due || "N/A"}

        </div>

        <div class="actions">

        <button onclick="toggleTask(${index})">

        ${task.completed?"Undo":"Complete"}

        </button>

        <button onclick="editTask(${index})">

        Edit

        </button>

        <button onclick="deleteTask(${index})">

        Delete

        </button>

        </div>

        `;

        list.appendChild(li);

    });

    document.getElementById("completedCount").innerHTML="Completed: "+completed;
    document.getElementById("pendingCount").innerHTML="Pending: "+pending;

}

function toggleTask(index){

    tasks[index].completed=!tasks[index].completed;

    saveTasks();

    displayTasks();

}

function deleteTask(index){

    if(confirm("Delete task?")){

        tasks.splice(index,1);

        saveTasks();

        displayTasks();

    }

}

function editTask(index){

    let newTask=prompt("Edit Task",tasks[index].text);

    if(newTask && newTask.trim()!=""){

        tasks[index].text=newTask;

        saveTasks();

        displayTasks();

    }

}

document.getElementById("search").addEventListener("keyup",displayTasks);

document.getElementById("filter").addEventListener("change",displayTasks);

document.getElementById("themeBtn").onclick=function(){

document.body.classList.toggle("dark");

};

displayTasks();