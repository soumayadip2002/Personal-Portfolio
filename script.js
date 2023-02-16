let menu = document.querySelector('#menu-bars');

let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');

}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

}

var type = new Typed(".multi-text", {
    strings: ["College Student", "Web Developer", "Django Developer"],
    typeSpeed: 100,
    backSpedd: 100,
    backDelay: 1000,
    loop: true
})


var swiper = new Swiper(".slide-container", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,

    },

    centeredSlides: true,
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 3,
        },

        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        }
    }




});

const navBar = document.querySelectorAll("header .navbar a");
const sec = document.querySelectorAll("section");

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 97 < sec[len].offsetTop) {

    }

    navBar.forEach(ltx => ltx.classList.remove("active"));
    navBar[len].classList.add("active");
}

window.addEventListener("scroll", activeMenu);

window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
                method: 'POST',
                body: data,
            })
            .then(() => {
                alert("Thank You for Your Response 😀");
                form.reset();
            })
    });

});