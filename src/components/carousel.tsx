// import CarouselImage from "./caroUelImage";
import "../styles/carousel.scss";
import { Carousel } from "./gallery";

function CarouselCard() {
  const images = [
    "https://via.placeholder.com/800x400?text=Slide+1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
  ];

  return <Carousel images={images}></Carousel>;
}

export default CarouselCard;
