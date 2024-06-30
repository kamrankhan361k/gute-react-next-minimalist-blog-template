import { ThemeVariation } from '@common/enum';
import { PrevArrow, NextArrow } from '@components/other/slick-arrows';
import PostStardard from '@components/post/post-stardard';
import { AppState } from '@store';
import { handleGetTrendingPosts } from '@store/thunk/post';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';

const dummyData: any[] = [
  {
    id: 1,
    background: '/assets/images/backgrounds/slider-bg-1.png',
  },
  {
    id: 2,
    background: '/assets/images/backgrounds/slider-bg-2.png',
  },
  {
    id: 3,
    background: '/assets/images/backgrounds/slider-bg-1.png',
  },
];

const HeroSliderCarousel = ({ theme }: { theme?: ThemeVariation }) => {
  const dispatch = useDispatch();

  const { data } = useSelector((state: AppState) => state.posts.trendingList);

  useEffect(() => {
    dispatch(handleGetTrendingPosts({ _limit: 3, type_like: 'image' }));
  }, []);

  const finalData = data.map((item, index) => ({ ...dummyData[index], data: item }));

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    fade: true,
  };

  return (
    <div className="hero-slider-carousel">
      <Slider {...settings}>
        {finalData.map((item: any, index) => (
          <div key={index} className="hero-slider-carousel__item">
            <div className="slider-item__image">
              <img src={item.background} alt={item.data.title} />
            </div>
            <div className="slider-item__content">
              <PostStardard theme={theme} data={item.data} className="-center" hideCover />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSliderCarousel;
