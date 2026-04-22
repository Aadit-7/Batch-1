let addButton = document.querySelector("#addBtn");
let clearButton = document.querySelector("#clearBtn");
let ul = document.querySelector("#list");
let input = document.querySelector("input");

addButton.addEventListener("click", () => {
  let value = input.value.trim();

  if (value === "") return;

  let li = document.createElement("li");
  li.innerText = value;

  ul.appendChild(li);

  input.value = "";
});

clearButton.addEventListener("click", () => {
  ul.innerHTML = "";
});
