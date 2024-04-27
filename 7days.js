var titles = document.querySelectorAll('.classic');
var details = document.getElementsByClassName('panel')
var rotate = document.getElementsByClassName('ex1');
// loop for litles
for (var i = 0; i <titles.length; i++){
  titles[i].addEventListener('click',function(){
   var panel = this.nextElementSibling;
   var isactive = this.classList.contains("active");
   //hide panels
   for(var k = 0; k < details.length; k++) {
    details[k].style.display = "none";
    
    titles[k].classList.remove("active"); 
    rotate[k].style.transform = "rotate(0deg)";
    // show panel when clicked
    if(!isactive){
      panel.style.display = "block";
      this.classList.toggle("active");
      this.querySelector('.ex1').style.transform = "rotate(-180deg)";
    }
   }

  });
}