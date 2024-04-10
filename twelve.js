let one = document.getElementById("one");
let two = document.getElementById("TW");
let three = document.getElementById("THR");
let four = document.getElementById("FOUR");
let five = document.getElementById("six");
let six = document.getElementById("SEVEN");
let seven = document.getElementById("NINE");
let eight = document.getElementById("hen");
let nine = document.getElementById("dog");
let ten = document.getElementById("cat");
let elven = document.getElementById("pig");
let twelve = document.getElementById("duck");
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
let boy9 = document.getElementById("inine");
let boy10 = document.getElementById("iten");
let boy11 = document.getElementById("ielven");



let isExpanded = false;


function display() {
    if (!isExpanded) {
        one.style.height = "600px";
        boy.style.transform = "rotate(-180deg)";
        two.style.height = "75px"
        three.style.height = "75px";
        four.style.height = "75px";
        five.style.height = "75px";
        six.style.height = "75px";
        seven.style.height = "75px";
        eight.style.height = "80px";
        nine.style.height = "75px";
        ten.style.height = "75px";
        elven.style.height = "75px";
        twelve.style.height = "75px";
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
    let two = document.getElementById("TW");
    if (!isExpanded) {
        two.style.height = "800px";
        boy1.style.transform = "rotate(-180deg)";
        one.style.height = "70px"
        three.style.height = "70px";
        four.style.height = "70px";
        five.style.height = "70px";
        seven.style.height = "75px";
        six.style.height = "75px";
        eight.style.height = "80px";
        ten.style.height = "75px";
        nine.style.height = "75px";
        elven.style.height = "75px";
        twelve.style.height = "75px";
        isExpanded = true;
    } else {
        two.style.height = "70px"
        boy1.style.transform = "rotate(0deg)";
        three.style.height ="70px";

        isExpanded = false;
    }
}
two.addEventListener('click', displayALLTwo);

function displayALLThree() {
    let three = document.getElementById("THR");
    if (!isExpanded) {
        three.style.height = "600px";
        boy2.style.transform = "rotate(-180deg)";
        two.style.height = "70px";
        one.style.height = "75px"
        four.style.height = "70px";
        five.style.height = "70px";
        seven.style.height = "75px";
        six.style.height = "75px";
        eight.style.height = "80px";
        ten.style.height = "75px";
        nine.style.height = "75px";
        elven.style.height = "75px";
        twelve.style.height = "75px";

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
    let four = document.getElementById("FOUR");
    if (!isExpanded) {
        four.style.height = "700px";
        boy3.style.transform = "rotate(-180deg)";
        one.style.height = "75px";
        two.style.height = "70px";
        three.style.height = "70px";
        five.style.height = "75px";
        six.style.height = "75px";
        eight.style.height = "75px";
        nine.style.height = "75px";
        ten.style.height = "75px";
        seven.style.height = "75px";
        elven.style.height = "75px";
        twelve.style.height = "75px";
        isExpanded = true;
    } else {
        four.style.height = "70px";
        boy3.style.transform = "rotate(0deg)";
        five.style.height = "75px";
        isExpanded = false;
    }
}
four.addEventListener('click',displayALLFour)

function displayALLFive (){
    let five = document.getElementById("six");
    if (!isExpanded){
        five.style.height = "800px";
        boy4.style.transform ="rotate(-180deg)";
        one.style.height = "75px";
        two.style.height = "70px";
        four.style.height = "70px";
        three.style.height = "70px";
        eight.style.height = "80px";
        six.style.height = "75px";
        ten.style.height = "75px";
        nine.style.height = "75px"; 
        seven.style.height = "75px";
        elven.style.height = "75px";
        twelve.style.height = "75px";
        
        isExpanded = true;
    } else {
        five.style.height = "75px";
        boy4.style.transform = "rotate(0deg)";
        isExpanded = false;
    }
}
five.addEventListener('click',displayALLFive)

function displayALLSix() {
    if (!isExpanded) {
        six.style.height = "700px";
        boy5.style.transform = "rotate(-180deg)";
        one.style.height = "75px";
        two.style.height = "70px";
        three.style.height = "70px";
        four.style.height = "70px";
        five.style.height = "70px";
        eight.style.height = "80px";
        ten.style.height = "75px";
        nine.style.height = "75px";   
        elven.style.height = "75px";
        twelve.style.height = "75px";     

        isExpanded = true;

    } else {
        six.style.height = "75px";
        seven.style.height = "75px";
        boy5.style.transform = "rotate(0deg)";

        isExpanded = false;

    }
}
six.addEventListener('click',displayALLSix)


function displayALLSeven() {
    if (!isExpanded) {
        seven.style.height = "700px";
        boy6.style.transform = "rotate(-180deg)";
        one.style.height = "75px";
        two.style.height = "70px";
        three.style.height = "70px";
        four.style.height = "70px";
        five.style.height = "70px";
        six.style.height = "75px";
        eight.style.height = "75px";
        ten.style.height = "75px";
        nine.style.height = "75px";   
        elven.style.height = "75px";
        twelve.style.height = "75px";     

        isExpanded = true;

    } else {
        seven.style.height = "75px";
        boy6.style.transform = "rotate(0deg)";

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
        six.style.height = "75px";
        nine.style.height = "75px";
        ten.style.height = "75px";
        elven.style.height = "75px";
        twelve.style.height = "75px";
        boy7.style.transform = "rotate(-180deg)";
        isExpanded = true;

    } else {
        eight.style.height = "80px";
        boy7.style.transform = "rotate(0deg)"; 
        isExpanded = false;
    }
}
eight.addEventListener('click',displayALLEight)

function displayALLNine() {
    if (!isExpanded) {
        nine.style.height = "800px"
        eight.style.height = "80px";
        one.style.height = "75px";
        two.style.height = "70px";
        seven.style.height = "75px"
        three.style.height = "70px";
        four.style.height = "70px";
        five.style.height = "70px";
        ten.style.height = "75px";
        six.style.height = "75px";
        elven.style.height = "75px";
        twelve.style.height = "75px";
        boy8.style.transform = "rotate(-180deg)";
        isExpanded = true;

    } else {
        nine.style.height = "75px";
        boy8.style.transform = "rotate(-180deg)";
        isExpanded = false;
    }
}
nine.addEventListener('click',displayALLNine)

function displayALLTen() {
    if (!isExpanded) {
        ten.style.height = "700px"
        eight.style.height = "80pxpx";
        nine.style.height = "75px"
        one.style.height = "75px";
        two.style.height = "70px";
        three.style.height = "70px";
        four.style.height = "70px";
        five.style.height = "70px";
        six.style.height = "70px";
        seven.style.height = "75px";
        elven.style.height = "75px";
        twelve.style.height = "75px";
        
      boy9.style.transform = "rotate(-180deg)";
        isExpanded = true;

    } else {
        ten.style.height = "70px";
        nine.style.height = "75px";

       boy9.style.transform = "rotate(0deg)",

        isExpanded = false;
    }
}
ten.addEventListener('click',displayALLTen)

function displayALLElven() {
    if (!isExpanded) {
        elven.style.height = "600px";
        boy10.style.transform = "rotate(-180deg)";
        one.style.height = "70px";
        two.style.height = "75px";
        three.style.height = "70px";
        four.style.height = "70px";
        five.style.height = "70px";
        six.style.height = "75px";
        seven.style.height = "75px";
        eight.style.height = "80px";
        ten.style.height = "75px";
        nine.style.height = "75px";
        twelve.style.height = "75px";
        isExpanded = true;
    } else {
        elven.style.height = "70px"
        boy10.style.transform = "rotate(0deg)";
        three.style.height ="70px";

        isExpanded = false;
    }
}
elven.addEventListener('click', displayALLElven);

function displayALLTwelve() {
    
    if (!isExpanded) {
        twelve.style.height = "600px";
        boy11.style.transform = "rotate(-180deg)";
        two.style.height = "70px";
        one.style.height = "75px"
        three.style.height = "75px"
        four.style.height = "70px";
        five.style.height = "70px";
        seven.style.height = "75px";
        six.style.height = "75px";
        eight.style.height = "80px";
        ten.style.height = "75px";
        nine.style.height = "75px";
        elven.style.height = "75px"

        isExpanded = true;
    } else {
        twelve.style.height = "70px";
        boy11.style.transform = "rotate(0deg)";
        four.style.height = "70px";
        isExpanded = false;
    }
}

twelve.addEventListener('click', displayALLTwelve)