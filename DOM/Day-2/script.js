let btn = document.querySelector("button");
let box = document.querySelector(".box");
let input = document.querySelector("input");
let form = document.querySelector("form");

/* box.addEventListener("mouseout", () => {
  console.log("exit");
});
box.addEventListener("mouseover", () => {
  console.log("entered");
});

input.addEventListener("keydown", () => {
  console.log("Key entered");
});
input.addEventListener("keyup", () => {
  console.log("Key relesed");
}); */

// input.addEventListener("input", () => {
//   console.log(input.value);
// });
// input.addEventListener("change", () => {
//   console.log("Changed");
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submitted");
});
