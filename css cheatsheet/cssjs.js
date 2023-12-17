
// Get all section headers
const sectionHeaders = document.querySelectorAll('h2');

// add click event listeners to each section header
sectionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    // toggle the visibility of the next sibling element (ul)
    header.nextElementSibling.classList.toggle('hide');
  });
});
