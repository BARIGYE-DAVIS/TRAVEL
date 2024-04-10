const car = document.querySelector('.dot');
const left = document.querySelector('.left');
const right =document.querySelector('.Right');


var sectionIndex = 0;

document.querySelectorAll('.arrows li').forEach(function(indicator, ind) {
    indicator.addEventListener('clik',function() {
        car.style.transform = 'translate('+ (ind) * -25 + '%)';
    });
    });
right.addEventListener('click', function(){
    sectionIndex = (sectionIndex <13) ? sectionIndex + 1 :13
car.style.transform = 'translate('+ (sectionIndex) * -25 + '%)';
car.style.transform = 'transion(2s)'
});

left.addEventListener('click', function(){
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
car.style.transform = 'translate('+ (sectionIndex) * -25 + '%)';
});