window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function scrollNext() {
  const courseGrid = document.getElementById('course-grid');
  const courseWidth = courseGrid.children[0].offsetWidth + 20; // Adjust for margin
  courseGrid.scrollBy({ left: courseWidth, behavior: 'smooth' });
}

function scrollPrev() {
  const courseGrid = document.getElementById('course-grid');
  const courseWidth = courseGrid.children[0].offsetWidth + 20; // Adjust for margin
  courseGrid.scrollBy({ left: -courseWidth, behavior: 'smooth' });
}

