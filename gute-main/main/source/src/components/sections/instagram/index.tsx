import INSTAGRAM_DATA from '@common/defines/instagram';
import { ThemeVariation } from '@common/enum';
import { renderThemeClass } from '@common/functions';
import classNames from 'classnames';
import React from 'react';
import Slider, { Settings } from 'react-slick';

const Instagram = ({ fullWidth, theme }: { fullWidth?: boolean; theme?: ThemeVariation }) => {
  const settings: Settings = {
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: fullWidth ? 6 : 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const content = (
    <div className={classNames('instagrams', renderThemeClass(theme))}>
      <div className="instagrams-container">
        <Slider {...settings}>
          {INSTAGRAM_DATA.map((item, index) => (
            <div key={index}>
              <a className="instagrams-item" href={item.link}>
                <img src={item.image} alt="Instagram image" />
                <div className="instagrams-item__content">
                  <i className="fab fa-instagram"></i>
                  <p>@ Gtute_News</p>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
  return fullWidth ? content : <div className="container">{content}</div>;
};

export default Instagram;
