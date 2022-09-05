const taskInput = document.querySelector(".task-input input"),
filters = document.querySelectorAll(".filters span"),
clearAll = document.querySelector(".clear-btn"),
taskBox = document.querySelector(".taskbox");

let editId;
let isEditedTask = false;

let todos = JSON.parse(localStorage.getItem("todo-list")); // get localStorage todo-list

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        showTodo(btn.id)
    });
});

// show all todos
function showTodo(filter) {
    let li = "";
    if(todos) {
        todos.forEach((todo, id) => {
            // if todo status is completed, set isCompleted value to checked
            let isCompleted = todo.status == "completed" ? "checked" : "";
            if(filter == todo.status || filter == "all") {
                li += `<li class="task">
                        <label for="${id}">
                            <input onclick="updateStatus(this)" type="checkbox" name="" id="${id}" ${isCompleted}>
                            <p class="${isCompleted}">${todo.name}</p>
                        </label>
                        <div class="settings">
                            <i onclick="showMenu(this)" class="uil-ellipsis-h"></i>
                            <ul class="task-menu">
                                <li onclick="editTask(${id}, '${todo.name}')"><i class="uil-pen"></i>Edit</li>
                                <li onclick="deleteTask(${id})"><i class="uil-trash"></i>Delete</li>
                            </ul>
                        </div>
                    </li>`;
            }
            
        });
    }
    taskBox.innerHTML = li || `<span><i>You don't have any task here</i></span>`;
}
showTodo("all"); //default display

// show task-menu
function showMenu(selectedTask) {
    // get task-menu ul
    let taskMenu = selectedTask.parentElement.lastElementChild;
    taskMenu.classList.add("show");
    document.addEventListener("click", e => {
        // remove show class from task-menu on the doc click
        if(e.target.tagName != "I" || e.target != selectedTask) {
            taskMenu.classList.remove("show");
        }
    });
}

// edit task
function editTask(taskId, taskName) {
    editId = taskId;
    isEditedTask = true;
    taskInput.value = taskName;
    taskInput.focus();
}

// delete task
function deleteTask(deleteId) {
    // remove selected task from array/todos
    todos.splice(deleteId, 1);
    localStorage.setItem("todo-list", JSON.stringify(todos)); // update storage
    showTodo("all");
}

clearAll.addEventListener("click", () => {
    // remove all items of array/todos
    todos.splice(0, todos.length);
    localStorage.setItem("todo-list", JSON.stringify(todos)); // update storage
    showTodo("all");
});

// update task status
function updateStatus(selectedTask) {
    // get paragraph containing task name
    let taskName = selectedTask.parentElement.lastElementChild;
    if(selectedTask.checked) {
        taskName.classList.add("checked");
        todos[selectedTask.id].status = "completed"; //update to complete status
    } else {
        taskName.classList.remove("checked");
        todos[selectedTask.id].status = "pending"; //update to pending status
    }
    localStorage.setItem("todo-list", JSON.stringify(todos)); // save new status to storage
}

// add new task
taskInput.addEventListener("keyup", e => {
    let userTask = taskInput.value.trim();
    if(e.key == "Enter" && userTask) {
        if(!isEditedTask) {
            if(!todos) { // if todos doesn't exist, pass an empty array to todos
                todos = [];
            }
            let taskInfo = {name: userTask, status: "pending"}; //default status
            todos.push(taskInfo); // add new task to todos
        } else {
            isEditedTask = false;
            todos[editId].name = userTask;
        }
        taskInput.value = "";
        localStorage.setItem("todo-list", JSON.stringify(todos)); // save to storage with todo-list name
        showTodo("all");
        // reset to all filter
        document.querySelector("span.active").classList.remove("active");
        document.querySelector("span").classList.add("active");
    }
});
