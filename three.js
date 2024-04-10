let one = document.getElementById("ON");
let two = document.getElementById("TW");
let three = document.getElementById("THR");
let boy = document.getElementById("ONCE");
let boy1 = document.getElementById("TWICE");
let boy2 = document.getElementById("THRICE");

let isExpanded = false;

function display() {
    if (!isExpanded) {
        one.style.height = "700px";
        two.style.height = "80px";
        three.style.height = "80px";
         boy.style.transform = "rotate(-180deg)";
        isExpanded = true;
    } else {
        one.style.height = "80px";
         boy.style.transform = "rotate(0deg)";
         isExpanded = false;
    }
}
one.addEventListener('click', display)

function displayALLTwo() {
    if (!isExpanded) {
        two.style.height = "700px";
        one.style.height = "80px";
        three.style.height = "80px";
        boy1.style.transform = "rotate(-180deg)";
        isExpanded =true;

    } else {
        two.style.height = "80px";
        boy1.style.transform = "rotate(0deg)";
        three.style
        isExpanded = false;
    }
}
two.addEventListener('click',displayALLTwo)

function displayALLThree() {
    if (!isExpanded) {
        three.style.height = "700px";
        one.style.height = "80px";
        two.style.height = "80px";
        boy2.style.transform = "rotate(-180deg)";
        isExpanded = true;
    } else {
        three.style.height = "80px";
        boy2.style.transform = "rotate(0deg)";
        isExpanded = false;
    }
}
three.addEventListener('click',displayALLThree)