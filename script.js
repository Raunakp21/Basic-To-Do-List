//Elements
const input = document.querySelector(".input");
const add = document.querySelector(".addBtn");
const todoContainer = document.querySelector(".todoContainer");

//Event Listeners
add.addEventListener("click", addTodo);

//Functions
function addTodo(e) {
  const inputTodo = document.createElement("input");
  inputTodo.classList.add("inputTodo");
  inputTodo.value = input.value;
  const removeTodo = document.createElement("button");
  removeTodo.classList.add("removeTodo");
  removeTodo.innerText = "REMOVE";
  removeTodo.addEventListener("click", removeTodoFn);

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todoBox");

  todoDiv.appendChild(inputTodo);
  todoDiv.appendChild(removeTodo);
  todoContainer.appendChild(todoDiv);
  input.value = "";
}

function removeTodoFn(e) {
  const div = e.target;
  const parentDiv = div.parentElement;
  parentDiv.remove();
}
