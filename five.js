let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("THREE");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("SEVEN");
let eight = document.getElementById("EIGHT");
let nine = document.getElementById("NINE");
let ten = document.getElementById("TEN");
let elven = document.getElementById("ON");
let twelve = document.getElementById("TW");
let thirteen = document.getElementById("THR")
let boy = document.getElementById("ione");
let boy1 = document.getElementById("itwo");
let boy2 = document.getElementById("iii");
let boy3 = document.getElementById("1vv");
let boy4 = document.getElementById("vvv");
let boy5 = document.getElementById("vi");
let boy6 = document.getElementById("isix");
let boy7 = document.getElementById("iseven");
let boy8 = document.getElementById("ieight");



let isExpanded = false;

function display() {
    if (!isExpanded) {
        one.style.height = "700px";
        boy.style.transform = "rotate(-180deg)";
        two.style.height = "70px"
        three.style.height = "70px";
        four.style.height = "70px";
        five.style.height = "70px";
        seven.style.height = "75px";
        eight.style.height = "80px";
        nine.style.height = "60px";
        ten.style.height = "60px";
        isExpanded = true;
    } else {
        one.style.height = "75px"
        boy.style.transform = "rotate(0deg)";
        two.style.height ="70px";

        isExpanded = false;
    }
}
one.addEventListener('click',display);

function displayALLTwo() {
    let two = document.getElementById("two");
    if (!isExpanded) {
        two.style.height = "900px";
        boy1.style.transform = "rotate(-180deg)";
        one.style.height = "70px"
        three.style.height = "70px";
        four.style.height = "70px";
        five.style.height = "70px";
        seven.style.height = "75px";
        eight.style.height = "80px";
        ten.style.height = "60px";
        nine.style.height = "60px";
        isExpanded = true;
    } else {
        two.style.height = "70px"
        boy.style.transform = "rotate(0deg)";
        three.style.height ="70px";

        isExpanded = false;
    }
}
two.addEventListener('click', displayALLTwo);

function displayALLThree() {
    let three = document.getElementById("THREE");
    if (!isExpanded) {
        three.style.height = "600px";
        boy2.style.transform = "rotate(-180deg)";
        two.style.height = "70px";
        one.style.height = "75px"
        four.style.height = "70px";
        five.style.height = "70px";
        seven.style.height = "75px";
        eight.style.height = "80px";
        ten.style.height = "60px";
        nine.style.height = "60px";

        isExpanded = true;
    } else {
        three.style.height = "70px";
        boy2.style.transform = "rotate(0deg)";
        four.style.height = "70px";
        isExpanded = false;
    }
}

three.addEventListener('click', displayALLThree)

function displayALLFour() {
    let four = document.getElementById("four");
    if (!isExpanded) {
        four.style.height = "600px";
        boy3.style.transform = "rotate(-180deg)";
        one.style.height = "75px";
        two.style.height = "70px";
        three.style.height = "70px";
        five.style.height = "75px";
        eight.style.height = "75px";
        nine.style.height = "60px";
        ten.style.height = "60px";
        seven.style.height = "75px"
        isExpanded = true;
    } else {
        four.style.height = "70px";
        boy3.style.transform = "rotate(0deg)";
        five.style.height = "70px";
        isExpanded = false;
    }
}
four.addEventListener('click',displayALLFour)

function displayALLFive (){
    let five = document.getElementById("five");
    if (!isExpanded){
        five.style.height = "700px";
        boy4.style.transform ="rotate(-180deg)";
        one.style.height = "75px";
        two.style.height = "70px";
        four.style.height = "70px";
        three.style.height = "70px";
        eight.style.height = "80px";
        ten.style.height = "60px";
        nine.style.height = "60px"; 
        seven.style.height = "75px";
        
        isExpanded = true;
    } else {
        five.style.height = "70px";
        boy4.style.transform = "rotate(0deg)";
        isExpanded = false;
    }
}
five.addEventListener('click',displayALLFive)



function displayALLSeven() {
    if (!isExpanded) {
        seven.style.height = "700px";
        boy5.style.transform = "rotate(-180deg)";
        one.style.height = "75px";
        two.style.height = "70px";
        three.style.height = "70px";
        four.style.height = "70px";
        five.style.height = "70px";
        eight.style.height = "80px";
        ten.style.height = "60px";
        nine.style.height = "60px";        

        isExpanded = true;

    } else {
        seven.style.height = "75px";
        boy5.style.transform = "rotate(0deg)";

        isExpanded = false;

    }
}
seven.addEventListener('click',displayALLSeven)
 
function displayALLEight() {
    if (!isExpanded) {
        eight.style.height = "600px";
        one.style.height = "75px";
        two.style.height = "70px";
        three.style.height = "70px";
        four.style.height = "70px";
        five.style.height = "70px";
        seven.style.height = "75px";
        nine.style.height = "60px"
        ten.style.height = "60px"
        boy6.style.transform = "rotate(-180deg)";
        isExpanded = true;

    } else {
        eight.style.height = "80px";
        boy6.style.transform = "rotate(0deg)"; 
        isExpanded = false;
    }
}
eight.addEventListener('click',displayALLEight)

function displayALLNine() {
    if (!isExpanded) {
        nine.style.height = "600px"
        eight.style.height = "80px";
        one.style.height = "75px";
        two.style.height = "70px";
        seven.style.height = "75px"
        three.style.height = "70px";
        four.style.height = "70px";
        five.style.height = "70px";
        ten.style.height = "60px"
        boy7.style.transform = "rotate(-180deg)";
        isExpanded = true;

    } else {
        nine.style.height = "75px";
        boy7 .style.transform = "rotate(-180deg)";
        isExpanded = false;
    }
}
nine.addEventListener('click',displayALLNine)

function displayALLTen() {
    if (!isExpanded) {
        ten.style.height = "600px"
        eight.style.height = "80pxpx";
        nine.style.height = "60px"
        one.style.height = "75px";
        two.style.height = "70px";
        three.style.height = "70px";
        four.style.height = "70px";
        five.style.height = "70px";
        seven.style.height = "75px"
        
      boy8.style.transform = "rotate(-180deg)";
        isExpanded = true;

    } else {
        ten.style.height = "70px";
        nine.style.height = "60px";

       boy8.style.transform = "rotate(0deg)",

        isExpanded = false;
    }
}
ten.addEventListener('click',displayALLTen)