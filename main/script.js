function navSlide() {
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".nav-links");
    var navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        
        //toggle nav bar
        nav.classList.toggle("nav-active");

        //animate nav links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
      });
    });    
}

navSlide();
