// event listener for the carousel
document.addEventListener('DOMContentLoaded', (event) => {
    // grabs the elements from .carousel-inner into an array
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    // Checks image url and displays the image accordingly
    function updateCarousel() {
        carouselItems.forEach((item, index) => {
            if (index === currentIndex) {
                item.id = 'active';
                const imageUrl = item.getAttribute('data-image');
                if (imageUrl) {
                    item.style.backgroundImage = `url(${imageUrl})`;
                }
                item.style.opacity = '1'; 
            } else {
                item.id = '';
                item.style.backgroundImage = '';
                item.style.opacity = '0';
            }
        });
    }

    // adds 1 to the current index to move the carousel forward
    document.getElementById('right').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    });

    // takes away 1 to the current index to move backward
    document.getElementById('left').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    });

    updateCarousel(); 
});
