// JavaScript to toggle visibility of sections when clicking headers

// Get all section headers
const sectionHeaders = document.querySelectorAll('h2');

// Add click event listeners to each section header
sectionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    // Toggle the visibility of the next sibling element (ul)
    header.nextElementSibling.classList.toggle('hide');
  });
});
