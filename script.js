// const { act } = require("react");

// logic 3 toggle icon navbar 
 let menuIcon = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
      navbar.classList.toggle('activity');
    };

// logic1 scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
    // ************
    //logic2  sticky navbar 
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100)

    // logic 4 remove tooggle btn 
     navbar.classList.remove('activity');
}

// logic 5 use scroll Reveal 

ScrollReveal({
     reset: true ,
     distance:'80px',
     duration:2000,
     delay:200,
});

// home content and heading 
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

// all section in img and boxes 
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content, h1, .about-img', { origin: 'left' });  //only home in h1 animate.

ScrollReveal().reveal('.home-content p, .about-content' , { origin: 'right' });

// logic 6 type js .

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','Full Stack Developer','Youtuber', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

})