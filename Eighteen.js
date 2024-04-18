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
let thirteen = document.getElementById("five");
let fourteen = document.getElementById("THREE");
let fifteen = document.getElementById("ONE");
let sixteen = document.getElementById("four");
let seventeen = document.getElementById("two");
let eighteen = document.getElementById("EIGHT");

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
let boy12 = document.getElementById("itwelve");
let boy13 = document.getElementById("ithirteen");
let boy14 = document.getElementById("ifourteen");
let boy15 = document.getElementById("ifive");
let boy16 = document.getElementById("isixteen");
let boy17 = document.getElementById("iseventeen");



let isExpanded = false;


function display() {
    if (!isExpanded) {
        one.style.height = "900px";
        boy.style.transform = "rotate(-180deg)";
        two.style.height = "3rem";
        three.style.height = "4rem";
        four.style.height = "4rem";
        five.style.height = "4rem";
        six.style.height = "4rem";
        seven.style.height = "4rem;";
        eight.style.height = "4rem";
        nine.style.height = "4rem";
        ten.style.height = "4rem";
        elven.style.height = "4rem";
        twelve.style.height = "75px";
        thirteen.style.height = "70px";
        fourteen.style.height = "70px";
        fifteen.style.height = "60px";
        sixteen.style.height = "70px";
        seventeen.style.height = "70px";
        eighteen.style.height = "80px";
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
        one.style.height = "3rem";
        three.style.height = "3rem";
        four.style.height = "3rem";
        five.style.height = "3rem";
        seven.style.height = "4rem";
        six.style.height = "4rem";
        eight.style.height = "4rem";
        ten.style.height = "4rem";
        nine.style.height = "4rem";
        elven.style.height = "4rem";
        twelve.style.height = "4rem";
        thirteen.style.height = "3rem";
        fourteen.style.height = "3rem";
        fifteen.style.height = "3rem";
        sixteen.style.height = "3rem";
        seventeen.style.height = "3rem";
        eighteen.style.height = "4rem";
        isExpanded = true;
    } else {
        two.style.height = "3rem"
        boy1.style.transform = "rotate(0deg)";
        three.style.height ="3rem";

        isExpanded = false;
    }
}
two.addEventListener('click', displayALLTwo);

function displayALLThree() {
    let three = document.getElementById("THR");
    if (!isExpanded) {
        three.style.height = "600px";
        boy2.style.transform = "rotate(-180deg)";
        two.style.height = "3rem";
        one.style.height = "4rem";
        four.style.height = "3rem";
        five.style.height = "3rem";
        seven.style.height = "4rem";
        six.style.height = "4rem";
        eight.style.height = "4rem";
        ten.style.height = "4rem";
        nine.style.height = "4rem";
        elven.style.height = "4rem";
        twelve.style.height = "4rem";
        thirteen.style.height = "3rem";
        fourteen.style.height = "3rem";
        fifteen.style.height = "3rem";
        sixteen.style.height = "3rem";
        seventeen.style.height = "3rem";
        eighteen.style.height = "4rem";
        isExpanded = true;
    } else {
        three.style.height = "3rem";
        boy2.style.transform = "rotate(0deg)";
        four.style.height = "3rem";
        isExpanded = false;
    }
}

three.addEventListener('click', displayALLThree)

function displayALLFour() {
    let four = document.getElementById("FOUR");
    if (!isExpanded) {
        four.style.height = "600px";
        boy3.style.transform = "rotate(-180deg)";
        one.style.height = "4remx";
        two.style.height = "4rem";
        three.style.height = "3rem";
        five.style.height = "4rem";
        six.style.height = "4rem";
        eight.style.height = "4rem";
        nine.style.height = "4rem";
        ten.style.height = "4rem";
        seven.style.height = "4rem";
        elven.style.height = "4rem";
        twelve.style.height = "75px";
        thirteen.style.height = "70px";
        fourteen.style.height = "70px";
        fifteen.style.height = "60px";
        sixteen.style.height = "70px";
        seventeen.style.height = "70px";
        eighteen.style.height = "80px";
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
    let five = document.getElementById("six");
    if (!isExpanded){
        five.style.height = "1000px";
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
        thirteen.style.height = "70px";
        fourteen.style.height = "70px";
        fifteen.style.height = "60px";
        sixteen.style.height = "70px";
        seventeen.style.height = "70px";
        eighteen.style.height = "80px";
        isExpanded = true;
    } else {
        five.style.height = "70px";
        boy4.style.transform = "rotate(0deg)";
        isExpanded = false;
    }
}
five.addEventListener('click',displayALLFive)

function displayALLSix() {
    if (!isExpanded) {
        six.style.height = "800px";
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
        thirteen.style.height = "70px";
        fourteen.style.height = "70px";
        fifteen.style.height = "60px";
        sixteen.style.height = "70px";
        seventeen.style.height = "70px";
        eighteen.style.height = "80px";   

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
        seven.style.height = "800px";
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
        thirteen.style.height = "70px";
        fourteen.style.height = "70px";
        fifteen.style.height = "60px";
        sixteen.style.height = "70px";
        seventeen.style.height = "70px";
        eighteen.style.height = "80px";  

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
        eight.style.height = "900px";
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
        thirteen.style.height = "70px";
        fourteen.style.height = "70px";
        fifteen.style.height = "60px";
        sixteen.style.height = "70px";
        seventeen.style.height = "70px";
        eighteen.style.height = "80px";
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
        nine.style.height = "850px"
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
        thirteen.style.height = "70px";
        fourteen.style.height = "70px";
        fifteen.style.height = "60px";
        sixteen.style.height = "70px";
        seventeen.style.height = "70px";
        eighteen.style.height = "80px";
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
        ten.style.height = "850px"
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
        thirteen.style.height = "70px";
        fourteen.style.height = "70px";
        fifteen.style.height = "60px";
        sixteen.style.height = "70px";
        seventeen.style.height = "70px";
        eighteen.style.height = "80px";
        
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
        elven.style.height = "750px";
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
        thirteen.style.height = "70px";
        fourteen.style.height = "70px";
        fifteen.style.height = "60px";
        sixteen.style.height = "70px";
        seventeen.style.height = "70px";
        eighteen.style.height = "80px";
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
        twelve.style.height = "900px";
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
        elven.style.height = "75px";
        thirteen.style.height = "70px";
        fourteen.style.height = "70px";
        fifteen.style.height = "60px";
        sixteen.style.height = "70px";
        seventeen.style.height = "70px";
        eighteen.style.height = "80px";

        isExpanded = true;
    } else {
        twelve.style.height = "70px";
        boy11.style.transform = "rotate(0deg)";
        four.style.height = "70px";
        isExpanded = false;
    }
}

twelve.addEventListener('click', displayALLTwelve)

function displayALLThirteen() {
    if (!isExpanded) {
        thirteen.style.height = "1000px";
        boy12.style.transform = "rotate(-180deg)";
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
        fourteen.style.height = "70px";
        fifteen.style.height = "60px";
        sixteen.style.height = "70px";
        seventeen.style.height = "70px";
        eighteen.style.height = "80px";
        isExpanded = true;
    } else {
        thirteen.style.height = "70px"
        boy12.style.transform = "rotate(0deg)";
        fourteen.style.height ="70px";

        isExpanded = false;
    }
}
thirteen.addEventListener('click', displayALLThirteen);

function displayALLFourteen() {

    if (!isExpanded) {
        fourteen.style.height = "800px";
        boy13.style.transform = "rotate(-180deg)";
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
        thirteen.style.height = "70px";
        fifteen.style.height = "60px";
        sixteen.style.height = "70px";
        seventeen.style.height = "70px";
        eighteen.style.height = "80px";
        isExpanded = true;
    } else {
        fourteen.style.height = "70px"
        boy13.style.transform = "rotate(0deg)";
        fifteen.style.height ="70px";

        isExpanded = false;
    }
}
fourteen.addEventListener('click', displayALLFourteen)

function displayALLFifteen() {

    if (!isExpanded) {
        fifteen.style.height = "700px";
        boy14.style.transform = "rotate(-180deg)";
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
        thirteen.style.height = "70px";
        fourteen.style.height = "70px";
        sixteen.style.height = "70px";
        seventeen.style.height = "70px";
        eighteen.style.height = "80px";
        isExpanded = true;
    } else {
        fifteen.style.height = "60px"
        boy14.style.transform = "rotate(0deg)";
        sixteen.style.height ="70px";

        isExpanded = false;
    }
}
fifteen.addEventListener('click', displayALLFifteen);

function displayALLSixteen() {

    if (!isExpanded) {
        sixteen.style.height = "800px";
        boy15.style.transform = "rotate(-180deg)";
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
        thirteen.style.height = "70px";
        fourteen.style.height = "70px";
        fifteen.style.height = "60px";
        eighteen.style.height = "80px";
        seventeen.style.height = "70px";
        isExpanded = true;
    } else {
        sixteen.style.height = "70px"
        boy15.style.transform = "rotate(0deg)";
        seventeen.style.height ="70px";

        isExpanded = false;
    }
}
sixteen.addEventListener('click', displayALLSixteen);
function displayALLSeventeen() {

    if (!isExpanded) {
        seventeen.style.height = "800px";
        boy16.style.transform = "rotate(-180deg)";
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
        thirteen.style.height = "70px";
        fourteen.style.height = "70px";
        fifteen.style.height = "60px";
        sixteen.style.height = "70px";
    eighteen.style.height = "80px"
        isExpanded = true;
    } else {
        seventeen.style.height = "70px"
        boy16.style.transform = "rotate(0deg)";
        eighteen.style.height ="70px";

        isExpanded = false;
    }
}
seventeen.addEventListener('click', displayALLSeventeen);

function displayALLEighteen() {
    
    if (!isExpanded) {
        eighteen.style.height = "800px";
        boy17.style.transform = "rotate(-180deg)";
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
        thirteen.style.height = "70px";
        fourteen.style.height = "70px";
        fifteen.style.height = "60px";
        sixteen.style.height = "70px";
        seventeen.style.height = "70px";

        isExpanded = true;
    } else {
        eighteen.style.height = "70px"
        boy17.style.transform = "rotate(0deg)";
        

        isExpanded = false;
    }
}
two.addEventListener('click', displayALLEighteen);