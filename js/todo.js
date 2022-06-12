const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODFOS_KEY = "todos";

const toDos = [];

function saveToDos() {
  localStorage.setItem(TODFOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.addEventListener("click", deleteTodo);
  button.innerText = "X";
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToTods = localStorage.getItem(TODFOS_KEY);

function sayHello(item) {}

if (savedToTods !== null) {
  const parsedToDos = JSON.parse(savedToTods);
  parsedToDos.forEach((item) => {
    console.log("this is item " + item);
  });
}
