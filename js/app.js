const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");
const links = document.querySelectorAll(".nav-link");
const nav = document.querySelector(".nav-container");

// !! Hamburger Toggle
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  links.forEach((link) => {
    link.addEventListener('click', function() {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
    })
  });
});

// !! Sticky navigation
const initialCoordinast = nav.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY > initialCoordinast) {
    nav.classList.add("sticky");
    nav.style.opacity = 1
  } else {
    nav.classList.remove("sticky");
  }
});

function counter(){
    let count = setInterval(function(){
        let c =  document.getElementById("counter"),
        int = parseInt(c.textContent);
        c.textContent = (++int).toString();
        if(int == 134){
            clearInterval(count)
        }
    }, 10)
}
