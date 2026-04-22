let ul = document.querySelector("ul");
let div = document.querySelector("div");

let li = document.createElement("li");
let h1 = document.createElement("h1");

li.innerHTML = "mango";
h1.innerHTML = "This is h1 from js";

ul.appendChild(li);
div.appendChild(h1);
