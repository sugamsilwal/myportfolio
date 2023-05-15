// Get the header element
var header = document.querySelector('header');

// Add a scroll event listener
window.addEventListener('scroll', function() {
  // Check the scroll position
  if (window.pageYOffset > 200) {
    // If scrolled down, change the background color
    header.style.backgroundColor = '#333';
  } else {
    // If at the top, revert back to the original background color
    header.style.backgroundColor = '';
  }
});
