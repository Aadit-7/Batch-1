let interval = setInterval(() => {
  console.log("Hello");
}, 500);

setTimeout(() => {
  clearInterval(interval);
}, 10000);
