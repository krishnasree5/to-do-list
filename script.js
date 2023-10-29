const input = document.getElementById("add-task");
const tasks = document.getElementById("tasks"); 

function addTask(){
    if(input.value === ''){
        alert("Add a task!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        tasks.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    storeTasks();
}

tasks.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){

        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){

        e.target.parentElement.remove();
    }
    storeTasks();
});

function storeTasks(){
    localStorage.setItem("data", tasks.innerHTML);

}

function displayTasks(){
    tasks.innerHTML = localStorage.getItem("data");
}

displayTasks();