// TOGGLE STYLE SWITCHER

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style - switcher on scroll

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// THEME COLORS

const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    }
    )
}

// DARK MODE

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

// TOGGLE SIDEBAR

// const toggleSidebar = document.querySelector(".nav-toggler");
// styleSwitcherToggle.addEventListener("click", () => {
//     document.querySelector(".aside").classList.toggle("opened");
//     console.log('aperto')
// })

// function openNav() {
//     document.getElementById('aside').style.width = '270px';
//     console.log('nav')
// }

function openNav() {
    document.querySelector(".aside").classList.toggle("opened");
}

function closeNav() {
    document.querySelector(".aside").classList.remove("opened");
    // document.getElementById('toggler').classList.add("toggler-active");
    // console.log('ciao')
}

window.addEventListener("scroll", () => {
    if (document.querySelector(".aside").classList.contains("opened")) {
        document.querySelector(".aside").classList.remove("opened");
        document.getElementById('toggler').style.display = 'flex';
    }

})