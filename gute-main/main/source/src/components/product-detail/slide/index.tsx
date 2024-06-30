import { NextArrow, PrevArrow } from '@components/other/slick-arrows';
import { AppState } from '@store';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

const ProductDetailSlide = () => {
  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);

  const { data } = useSelector((state: AppState) => state.product.detail);

  const slider1Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  };
  const slider2Settings = {
    arrows: true,
    slidesToShow: 3,
    focusOnSelect: true,
    infinite: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="product-detail-slide">
      <div className="product-detail-slide__single">
        <Slider asNavFor={nav2} ref={(c) => setNav1(c)} {...slider1Settings}>
          {data?.images.map((img, index) => (
            <div key={index} className="slide-item">
              <img src={img} alt="Product image" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="product-detail-slide__nav">
        <Slider asNavFor={nav1} ref={(c) => setNav2(c)} {...slider2Settings}>
          {data?.images.map((img, index) => (
            <div key={index} className="product-detail-slide__nav-item">
              <img src={img} alt="Product image" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductDetailSlide;
