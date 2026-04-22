let input = document.getElementById("inputBox");
let output = document.getElementById("output");
let button = document.getElementById("clearBtn");

input.addEventListener("input", () => {
  output.innerText = input.value;
});

button.addEventListener("click", () => {
  input.value = "";
  output.innerText = "Your text will appear here";
});
