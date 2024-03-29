let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let menuclose = document.querySelector('#nclose')

menu.onclick = () => {
    navbar.classList.add('active');

}

menuclose.onclick = () => {
    navbar.classList.remove('active')
}

let r = document.querySelector(':root');
const home = document.querySelector('.home');
const toggle = document.getElementById('theme');

toggle.addEventListener("click", function() {
    this.classList.toggle("bx-moon");

    if (this.classList.toggle('bxs-sun')) {
        r.style.setProperty("--bg-color", "linear-gradient(145deg, #1e2024, #23272b)");
        r.style.setProperty("--white", "#eee");
        r.style.setProperty("--light-color", "#fff");
        r.style.setProperty("--black", "#212428");
        r.style.setProperty("--color", "#ffe700");
        r.style.setProperty("--font-color", "#111");
        r.style.setProperty("--logo-color1", "#fc3a52");
        r.style.setProperty("--logo-color2", "#42b883");
        r.style.setProperty("--home-img", "#42b883");
        r.style.setProperty("--bright", "#aaa");
        r.style.setProperty("--menu-bar", "#0e2431");
        r.style.setProperty("--linear", "linear-gradient(#232146, #44383F)");

    } else {
        r.style.setProperty("--bg-color", "#EBDEE5");
        r.style.setProperty("--white", "#111");
        r.style.setProperty("--light-color", "#000");
        r.style.setProperty("--black", "#eee");
        r.style.setProperty("--color", "#27ae60");
        r.style.setProperty("--font-color", "#fff");
        r.style.setProperty("--logo-color1", "#ff347f");
        r.style.setProperty("--logo-color2", "#f8b400");
        r.style.setProperty("--home-img", "#27ae60");
        r.style.setProperty("--bright", "#aaa");
        r.style.setProperty("--menu-bar", "#2c786c");
        r.style.setProperty("--linear", "linear-gradient(#6360A3, #E5A7E5)");




    }
})

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

}

var type = new Typed(".multi-text", {
    strings: ["College Student", "Web Developer", "Python Developer", "php developer"],
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

const navBar = document.querySelectorAll("header .navbar1 a");
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


let project = mixitup('.project-container', {
    selectors: {
        target: '.project-box'
    },
    animation: {
        duration: 300
    }
})

const linkproject = document.querySelectorAll('.project_id')

function activeProject() {
    linkproject.forEach(e => e.classList.remove('active-project'))
    this.classList.add('active-project')
}

linkproject.forEach(e => e.addEventListener("click", activeProject));



document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pro_btn")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".project_popup").classList.toggle("open");
}

document.querySelector(".project_popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".pro_img").src;
    document.querySelector(".project_popup-subtitle span").innerHTML = portfolioItem.querySelector(".title").innerHTML;
    document.querySelector(".project_popup-body").innerHTML = portfolioItem.querySelector(".project_item").innerHTML;
}