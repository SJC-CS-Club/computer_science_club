// function for the carousel
document.addEventListener('DOMContentLoaded', function() {
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
  
    // to change the images
    function updateCarousel() {
      carouselItems.forEach((item, index) => {
        item.classList.remove('active', 'prev', 'next');
        if (index === currentIndex) {
          item.classList.add('active');
          item.style.backgroundImage = `url(${item.dataset.image})`;
        } else if (index === (currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1)) {
          item.classList.add('prev');
        } else if (index === (currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1)) {
          item.classList.add('next');
        }
      });
    }
  
    // When the user clicks to the left
    leftButton.addEventListener('click', function() {
      currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
      updateCarousel();
    });
  
    // When the user clicks to the right
    rightButton.addEventListener('click', function() {
      currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
      updateCarousel();
    });
  
    updateCarousel();
});
  


// Save scroll position
window.addEventListener('beforeunload', () => {
  const scrollY = window.scrollY;
  console.log(`Saving scroll position: ${scrollY}`);
  localStorage.setItem('scrollPosition', scrollY);
});

// Restore scroll position and log the value
window.addEventListener('load', () => {
  setTimeout(() => {
      const scrollPosition = localStorage.getItem('scrollPosition');
      console.log(`Scroll Position from Local Storage: ${scrollPosition}`);
      if (scrollPosition) {
          window.scrollTo(0, parseInt(scrollPosition, 10));
          console.log(`Restored scroll position to: ${scrollPosition}`);
      }
  }, 0); // Delay added to ensure DOM is fully rendered
});
