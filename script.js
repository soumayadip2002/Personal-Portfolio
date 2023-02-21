let menu = document.querySelector('#menu-bars');

let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
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
        delay: 1000,
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
                form.reset();
            })
    });

});


let open = document.getElementById('send');
let show = document.getElementById('alert');
let close = document.getElementById('close');

function valid() {
    var n = document.forms['form1']['name'].value;
    var e = document.forms['form1']['email'].value;
    var p = document.forms['form1']['phone'].value;
    var m = document.forms['form1']['message'].value;

    if ((n == " ") && (e == " ") && (p == " ") && (m == " ")) {
        show.style.display = "none";
    } else {
        show.style.display = "block";
    }

}


close.addEventListener("click", () => {
    show.style.display = "none";
})


var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});


var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});