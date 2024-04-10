let one = document.getElementById("ONE");
let two = document.getElementById("TWO");
let three = document.getElementById("THREE");
let four = document.getElementById("FOUR");
let five = document.getElementById("five");
let six = document.getElementById("six");
let boy = document.getElementById("ione");
let boy1 = document.getElementById("itwo");
let boy2 = document.getElementById("iii");
let boy3 = document.getElementById("1vv");
let boy4 = document.getElementById("vvv");
let boy5 = document.getElementById("vi");

let isExpanded = false;

function display() {
    if (!isExpanded) {
        one.style.height = "400px";
        boy.style.transform = "rotate(-180deg)";
        three.style.height = "70px";
        four.style.height = "75px";
        five.style.height = "70px";
        six.style.height = "110px";
        isExpanded = true;
    } else {
        one.style.height = "60px"
        boy.style.transform = "rotate(0deg)";
        two.style.height ="75px";

        isExpanded = false;
    }
}
one.addEventListener('click',display);

function displayALLTwo() {
    let two = document.getElementById("TWO");
    if (!isExpanded) {
        two.style.height = "600px";
        boy1.style.transform = "rotate(-180deg)";
        one.style.height = "60px";
        three.style.height = "70px";
        four.style.height = "75px";
        five.style.height = "70px";
        six.style.height = "110px";

        isExpanded = true
    } else {
        two.style.height = "75px";
        boy1.style.transform = "rotate(0deg)";
        three.style.height = "75px";
        isExpanded = false;
    }
}
two.addEventListener('click', displayALLTwo);

function displayALLThree() {
    let three = document.getElementById("THREE");
    if (!isExpanded) {
        three.style.height = "800px";
        boy2.style.transform = "rotate(-180deg)";
        two.style.height = "75px";
        one.style.height = "60px";
        four.style.height = "75px";
        five.style.height = "70px";
        six.style.height = "110px";
        isExpanded = true;
    } else {
        three.style.height = "75px";
        boy2.style.transform = "rotate(0deg)";
        four.style.height = "75px";
        isExpanded = false;
    }
}

three.addEventListener('click', displayALLThree)

function displayALLFour() {
    let four = document.getElementById("FOUR");
    if (!isExpanded) {
        four.style.height = "600px";
        boy3.style.transform = "rotate(-180deg)";
        one.style.height = "60px";
        two.style.height = "75px";
        three.style.height = "70px";
        five.style.height = "70px";
        six.style.height = "110px";
        isExpanded = true;
    } else {
        four.style.height = "75px";
        boy3.style.transform = "rotate(0deg)";
        five.style.height = "75px";
        three.style.height = "75px";
        four.style.height = "75px";
        five.style.height = "75px";
        six.style.height = "110px";
        isExpanded = false;
    }
}
four.addEventListener('click',displayALLFour)

function displayALLFive (){
    let five = document.getElementById("five");
    if (!isExpanded){
        five.style.height = "800px";
        boy4.style.transform ="rotate(-180deg)";
        one.style.height = "60px";
        two.style.height = "75px";
        four.style.height = "75px";
        three.style.height = "70px";
        four.style.height = "75px";
        six.style.height = "110px";
        isExpanded = true;
    } else {
        five.style.height = "75px";
        boy4.style.transform = "rotate(0deg)";
        six.style.height = "75px";
        isExpanded = false;
    }
}
five.addEventListener('click',displayALLFive)


function displayALLSix(){
    let six = document.getElementById("six");
    if (!isExpanded){
        six.style.height = "700px";
        boy5.style.transform ="rotate(-180deg)";
        five.style.height = "75px"; 
        one.style.height = "60px";
        two.style.height = "75px";
        three.style.height = "70px";
        four.style.height = "75px";
        five.style.height = "70px";
        isExpanded = true;
    } else {
        six.style.height = "75px";
        boy5.style.transform = "rotate(0deg)";
        six.style.height = "75px";
        isExpanded = false;
    }
}
six.addEventListener('click',displayALLSix)