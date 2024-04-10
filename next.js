const car = document.querySelector('.car');
const left = document.querySelector('.left');
const right =document.querySelector('.Right');

var sectionIndex = 0;
right.addEventListener('click', function(){
    sectionIndex = (sectionIndex <16) ? sectionIndex + 1 :16
car.style.transform = 'translate('+ (sectionIndex) * -25 + '%)';
car.style.transform = 'transion(2s)'
});

left.addEventListener('click', function(){
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
car.style.transform = 'translate('+ (sectionIndex) * -25 + '%)';
});