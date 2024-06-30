import { ThemeVariation } from '@common/enum';
import { NextArrow, PrevArrow } from '@components/other/slick-arrows';
import PostStardard from '@components/post/post-stardard';
import { AppState } from '@store';
import { handleGetPosts } from '@store/thunk/post';
import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';

const HeroSliderSplitPostBox = ({ theme, className }: { theme?: ThemeVariation; className?: string }) => {
  const dispatch = useDispatch();
  const types = 'image';

  const { data } = useSelector((state: AppState) => state.posts.list);

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 695,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 465,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    dispatch(handleGetPosts({ _limit: 7, type_like: types }));
  }, []);

  return (
    <div className={classNames('hero-slider-split -post-box', className)}>
      <div className="container-full">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index}>
              <div className="slider-item">
                <PostStardard theme={theme} data={item} className="-box-text -center" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSliderSplitPostBox;
