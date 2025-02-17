let todoList = document.getElementById("todoList");

function addTodo() {
    let name = document.getElementById("todoName").value;
    let content = document.getElementById("todoContent").value;

    if (name && content) {
        let todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.innerHTML = `${name} : ${content} <button onclick="removeTodo(this)">❌</button>`;
        
        todoList.appendChild(todoItem);

        document.getElementById("todoName").value = "";
        document.getElementById("todoContent").value = "";
    }
}

function removeTodo(element) {
    element.parentElement.remove();
}
