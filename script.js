// JavaScript functionality goes here

document.addEventListener("DOMContentLoaded", function() {
    // Toggle menu button for small screens
    const menuButton = document.querySelector('.menu-button');
    const menuList = document.querySelector('.menu-list');
    
    menuButton.addEventListener('click', function() {
      menuList.classList.toggle('show-menu');
    });
    
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('.menu-list a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  });
  