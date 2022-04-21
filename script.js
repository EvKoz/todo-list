const list = document.querySelector(".list");
const form = document.querySelector(".form");

form.addEventListener("submit", add);

function render(text) {
  const todo = `<li class="item">${text}</li>`;
  list.insertAdjacentHTML("beforeend", todo);
}

function add(event) {
  event.preventDefault();
  const newTask = event.currentTarget.querySelector(".input").value;
  render(newTask);
  event.currentTarget.reset();
}
