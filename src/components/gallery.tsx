import React, { useState, useEffect } from "react";
import "../styles/gallery.scss";

import carouselImageEight from "/assets/images/carousel-image-eight.png";
import carouselImageNine from "/assets/images/carousel-image-nine.png";
import carouselImageSeven from "/assets/images/carousel-image-seven.png";
import carouselImageThirteen from "/assets/images/carousel-image-thirteen.png";




interface CarouselProps {
  images: string[]; // Array of strings for image URLs
  autoSlide?: boolean; // Optional: Default is true
  slideInterval?: number; // Optional: Default is 3000ms
}

export const Carousel: React.FC<CarouselProps> = ({
  images,
  autoSlide = false,
  slideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Next Button
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle Previous Button
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide Logic
  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(nextImage, slideInterval);
      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [autoSlide, slideInterval]);

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevImage}>
        <i className="bx bx-chevron-left"></i>
      </button>
      <div className="carousel-track-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <figure key={index} className="carousel-image-wrapper">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="carousel-image"
              />
            </figure>
          ))}
        </div>
      </div>
      <button className="carousel-button next" onClick={nextImage}>
        <i className="bx bx-chevron-right"></i>
      </button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const images = [
    carouselImageEight,
    carouselImageNine,
    carouselImageSeven,
    carouselImageThirteen
];

  return (
    <section id="gallery-page">
      <h1>Gallery</h1>
      <p>Check out media from the club!</p>
      <Carousel images={images}></Carousel>
    </section>
  );
};

export default Gallery;
