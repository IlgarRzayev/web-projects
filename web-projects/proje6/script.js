const menuToggle = document.querySelector('#menu-toggle');
const menuClose = document.querySelector('#menu-close');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');

menuToggle.onclick = () => {
    navbar.classList.add('active');
    menuToggle.style.display = 'none'; 
    menuClose.style.display = 'block'; 
}

menuClose.onclick = () => {
    navbar.classList.remove('active');
    menuToggle.style.display = 'block'; // Show toggle button
    menuClose.style.display = 'none'; // Hide close button
}

// Scroll ile header'ın aktif olmasını sağlama
window.onscroll = () => {
    if (window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

// Sayfa yüklendiğinde header'ın aktif olup olmamasını kontrol etme
window.onload = () => {
    if (window.scrollY > 0) {
        header.classList.add('active');
    }
}



document.querySelectorAll('.tab-link').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); 

        const tabId = this.getAttribute('data-tab');
        const modal = this.closest('.modal-content'); 

        modal.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));
        modal.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        this.classList.add('active');
        modal.querySelector(`#${tabId}`).classList.add('active');
    });
});
  
      
    
// Open modal
document.querySelectorAll('.more-info').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const modalId = this.getAttribute('data-modal');
        document.querySelector(`#${modalId}`).style.display = 'flex'; // Show modal
        document.querySelector('.swiper-container').classList.add('blur'); // Apply blur
    });
    });

    // Close modal
    document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        document.querySelector(`#${modalId}`).style.display = 'none'; // Hide modal
        document.querySelector('.swiper-container').classList.remove('blur'); // Remove blur
    });
    });

    // Close modal if clicked outside of modal content
    window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none'; // Hide modal
        document.querySelector('.swiper-container').classList.remove('blur'); // Remove blur
    }
    });        