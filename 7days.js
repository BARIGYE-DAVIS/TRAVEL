var day1 = document.querySelector('.day1');
var day2 = document.querySelector('.day2');
var day3 = document.querySelector('.day3');
var day4 = document.querySelector('.day4');
var day5 = document.querySelector('.day5');
var day6 = document.querySelector('.day6');
var day7 = document.querySelector('.day7');
var expand = document.querySelector('.ex1');
//section for details

var day_1 = document.querySelector('.day-1');
var day_2 = document.querySelector('.day-2');
var day_3 = document.querySelector('.day-3');
var day_4 = document.querySelector('.day-4');
var day_5 = document.querySelector('.day-5');
var day_6 = document.querySelector('.day-6');
var day_7 = document.querySelector('.day-7');
// if function
day1.addEventListener('click', function () {
  if (day_1.style.display === "") {
    day_1.style.display = 'block';
    day_2.style.display = "";
    day_3.style.display = "";
    day_4.style.display = "";
    day_5.style.display = "";
    day_6.style.display = "";
    day_7.style.display = "";
    expand.style.transform = "rotate(-180deg)";
  } else {
    day_1.style.display = "";
    expand.style.transform = "rotate(0deg)";
  }
});