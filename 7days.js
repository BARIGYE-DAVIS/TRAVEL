var titles = document.querySelectorAll(".classic"); // Select only day titles with sibling panels
      var details = document.getElementsByClassName("panel");
      var rotate = document.getElementsByClassName("ex1");
    
      for (var i = 0; i < titles.length; i++) {
        titles[i].addEventListener('click', function(){
          var panel = this.nextElementSibling;
          var isactive = this.classList.contains("active");
    
          // Hide all panels
          for (var k = 0; k < details.length; k++) {
            details[k].style.display = "none";
            titles[k].classList.remove("active"); // Remove active class from all titles
            rotate[k].style.transform = 'rotate(0deg)';
          }
    
          // Show clicked panel and toggle active class
          if (!isactive){
            panel.style.display = "block";
            this.classList.toggle("active");
            this.querySelector('.ex1').style.transform = 'rotate(-180deg)';
  } 
   
        });
      }