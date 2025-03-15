import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
const images = [
  "/نوم.jpg",
  "/خزانات ملابس.jpg",
  "/خزانات.jpg",
  "/نوم2.jpg",
  "/نوم4.jpg",
  "/خزانات2.jpg",
  "/خزانات3.jpg",
  "/نوم5.jpg",
  "/نوم6.jpg",
  "/خزانات7.jpg",
  "/نووم3.jpg",
];

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:1500,
  };

  return (
    <Slider  {...settings} style={{ width: "500px", margin: "auto", borderRadius: "50px"}}>
      {images.map((src, index) => (
        <div key={index}>
          <img className="imgSlider" src={src} alt={`Slide ${index}`} width="100%" height="350px" />
        </div>
      ))}
    </Slider>
  );
}

export default ImageSlider;
