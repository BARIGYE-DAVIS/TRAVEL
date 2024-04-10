const scrollers = document.querySelectorAll('.dog');

            if (!window.matchMedia("(prefers-reduced-motion: reduced)").matches) {
           addAnimation();
            }
            function addAnimation() {
                scrollers.forEach((dog) => {
                  dog.setAttribute("data-animated", true);


                    const scrollerinner = dog.querySelector('.car');
                    const content = Array.from(scrollerinner.children);

                content.forEach(item => {
                    const duplicatedItem = item.cloneNode(true);
                    console.log(duplicatedItem);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerinner.appendChild(duplicatedItem);
                    
                }); 
                });
            }   
var elements = document.querySelector('DOG');
 
