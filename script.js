// Counter
const counter = document.getElementById("counter");
let count = 0;

function decrease() {
  count--;
  counter.textContent = count;
}

function reset() {
  count = 0;
  counter.textContent = count;
}

function increase() {
  count++;
  counter.textContent = count;
}