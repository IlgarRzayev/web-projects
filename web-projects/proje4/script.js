const play = document.querySelector('.about__play');
const video = document.querySelector('.about__video video');

play.addEventListener('click', () => {
  video.play();
  video.setAttribute('controls', 'controls');
  play.classList.add('about__play--hidden');
});

const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    
    if(menuBtn.classList.contains('fa-bars')) {
        menuBtn.classList.remove('fa-bars');
        menuBtn.classList.add('fa-times');
    } else {
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
    }
});