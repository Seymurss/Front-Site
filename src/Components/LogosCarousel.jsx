import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/Css/LogosCarousel.css'
import html from '../assets/img/carousel/html.png';
import css  from '../assets/img/carousel/css-3.png';
import javascript from '../assets/img/carousel/javascript.png';
import jguery from '../assets/img/carousel/jquery-original-wordmark-icon-485x512-7kn0h2yt.png';
import react from '../assets/img/carousel/science.png'
import Bootstrap  from '../assets/img/carousel/bootstrap-logo-vector.png'
import laravel from '../assets/img/carousel/laravel.png'
import php from '../assets/img/carousel/php_PNG9.png'

const MyCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const items = [
    { id: 1,  image: html ,percent: 100},
    { id: 2,  image: css ,percent: 95 },
    { id: 13, image: Bootstrap ,percent: 90 },
    { id: 4,  image: javascript ,percent: 70 },
    { id: 5,  image: jguery ,percent: 90 },
    { id: 6,  image: react ,percent: 50 },
    { id: 8,  image: php ,percent: 70 },
    { id: 9,  image: laravel ,percent: 80 },
  ];

  return (
    <div style={{ width: "100%", margin: "136px auto" }}>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="slidebox">
                <p>{`${item.percent}%`}</p>

                <img
  src={item.image}
  alt={`Slide ${item.id}`}
  style={
    item.id === 7
      ? {
          width: '127px',
          height: '72px',
          marginTop: '6px',
        }
      : item.id === 8
      ? {
          width: '107px',
          height: '61px',
          marginLeft: '55px',
          marginTop: '17px',
        }
      : item.id === 9
      ?{
          width: '152px',
          height: '51px',
          marginLeft: '36px',
          marginTop: '26px',
        }
      : item.id === 6
      ? {
          height: '79px',
          width: '86px',
          marginBottom: '-19px',
        }
      : {}
  }
/>

              <div className="percent">
                    <div style={{ width: `${item.percent}%`, backgroundColor: "black" }}></div>
                    <div style={{ width: `${100 - item.percent}%`, backgroundColor: "silver" }}></div>
                </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MyCarousel;
