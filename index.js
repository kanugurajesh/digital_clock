let firstval = 0;
let secondval = 0;

let first = document.getElementById("middle1");
let second = document.getElementById("middle2");

document.getElementById("one").addEventListener("click", function () {
    firstval++;
    first.innerText = firstval;
})

document.getElementById("two").addEventListener("click", function () {
    firstval = firstval + 2;
    first.innerText = firstval;
})

document.getElementById("three").addEventListener("click", function () {
    firstval = firstval + 3;
    first.innerText = firstval;
})

document.getElementById("one1").addEventListener("click", function () {
    secondval++;
    second.innerText = secondval;
})

document.getElementById("two1").addEventListener("click", function () {
    secondval = secondval + 2;
    second.innerText = secondval;
})

document.getElementById("three1").addEventListener("click", function () {
    secondval = secondval + 3;
    second.innerText = secondval;
})

