/* ----------- toggle icon navbar -------- */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('.teste');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
};

/* ----------- scroll active link navbar -------- */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop- 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    /* ----------- sticky navbar -------- */
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky', window.screenY > 100)

    /* ----------- remove toggle icon and navbar when click navbar list-------- */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/* ------------- scroll reveal -------------- */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .heading',{origin: 'top'})
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin: 'bottom'})
ScrollReveal().reveal('.home-content h1, .about-img, .home-content p, .about-content',{origin: 'left'})
ScrollReveal().reveal('',{origin: 'right'})

/* ------------- typed  -------------- */
const typed = new Typed('.multiple-text',{
    strings: ['Desenvolvedor Web', 'Desenvolvedor Front-end', 'Estudante De Engenharia de software'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


/* --------------- Carrosel ---------------- */
const imgsCarrosel = document.querySelector('.carrosel')
const img = document.querySelectorAll(".carrosel img")

let idx = 0;

function carrosel(){
    idx++;
    if(idx > img.length - 1){
        idx = 0;
    }
    imgsCarrosel.style.transform = `translateX(${-idx * img[0].width}px)`;
}

setInterval(carrosel, 4000)


