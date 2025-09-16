import React, { useState, useEffect } from "react";
import "../styles/gallery.scss";

import carouselImageEight from "/assets/images/carousel-image-eight.png";
import carouselImageNine from "/assets/images/carousel-image-nine.png";
import carouselImageSeven from "/assets/images/carousel-image-seven.png";
import carouselImageThirteen from "/assets/images/carousel-image-thirteen.png";
import carouselImageTwelve from "/assets/images/carousel-image-twelve.png";
import carouselImageFour from "/assets/images/carousel-image-four.jpg";
import bannerImageOne from "/assets/images/banner-image-one.jpg";
import bannerImageTwo from "/assets/images/banner-image-two.jpg";
import bannerImageThree from "/assets/images/banner-image-three.jpg";
import bannerImageFour from "/assets/images/banner-image-four.jpg";
import bannerImageFive from "/assets/images/banner-image-five.jpg";
import imageFour from "/assets/images/week-4-one.jpg";
import imageFive from "/assets/images/week-4-two.jpg";

interface CarouselProps {
  images: string[];
  captions?: string[];
  autoSlide?: boolean;
  slideInterval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  images,
  captions = [],
  autoSlide = false,
  slideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  // Handle Next Button
  const nextImage = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTransitioning(false);
    }, 350);
  };

  // Handle Previous Button
  const prevImage = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setTransitioning(false);
    }, 350);
  };

  // Auto-slide Logic
  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(nextImage, slideInterval);
      return () => clearInterval(interval);
    }
  }, [autoSlide, slideInterval]);

  return (
    <div className="carousel">
      <button
        className="carousel-button prev"
        onClick={prevImage}
        aria-label="Previous image"
      >
        <i className="bx bx-chevron-left"></i>
      </button>
      <div className="carousel-track-wrapper">
        <div className="carousel-track">
          {images.map((image, index) => (
            <figure
              key={index}
              className={`carousel-image-wrapper${index === currentIndex ? " active" : ""}${transitioning ? " transitioning" : ""}`}
              style={{ display: index === currentIndex ? "flex" : "none" }}
            >
              <div className="carousel-image-overlay"></div>
              <img
                src={image}
                alt={captions[index] || `Slide ${index}`}
                className="carousel-image"
                draggable={false}
              />
              {captions[index] && (
                <figcaption className="carousel-caption">{captions[index]}</figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
      <button
        className="carousel-button next"
        onClick={nextImage}
        aria-label="Next image"
      >
        <i className="bx bx-chevron-right"></i>
      </button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot${index === currentIndex ? " active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            tabIndex={0}
            role="button"
            onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setCurrentIndex(index); }}
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
    carouselImageThirteen,
    carouselImageTwelve,
    carouselImageFour,
    bannerImageOne,
    bannerImageTwo,
    bannerImageThree,
    bannerImageFour,
    bannerImageFive,
    imageFour,
    imageFive
  ];
  const captions = [
    "Workship: Git & GitHub",
    "Intro to Python Development",
    "Game Development",
    "Team Project Night",
    "Game Development",
    "SJC Coding Comp winners 2024",
    "Workshop: Web Dev Basics",
    "Workshop: Game Development",
    "Community Driven",
    "Coding Together",
    "Workshop: Game Development",
    "workshop: Cybersecurity",
    "Community Driven"
  ];

  return (
    <section id="gallery-page">
      <h1>Gallery</h1>
      <p>Check out media from the club!</p>
      <Carousel images={images} captions={captions} autoSlide={true} slideInterval={4000} />
    </section>
  );
};

export default Gallery;
