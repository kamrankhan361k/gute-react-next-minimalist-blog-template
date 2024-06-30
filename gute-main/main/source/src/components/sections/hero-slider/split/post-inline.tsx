import { NextArrow, PrevArrow } from '@components/other/slick-arrows';
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { handleGetPosts } from '@store/thunk/post';
import { AppState } from '@store';
import PostInline from '@components/post/post-inline';
import { ThemeVariation } from '@common/enum';
import { PostInfo } from '@components/post/shared';

const HeroSliderSplitPostInline = ({ theme }: { theme?: ThemeVariation }) => {
  const dispatch = useDispatch();
  const types = 'image';

  const { data } = useSelector((state: AppState) => state.posts.list);

  const settings = {
    speed: 500,
    slidesToShow: 5,
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
    <div className="hero-slider-split -post-inline">
      <div className="container-full">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index}>
              <div className="slider-item">
                <PostInline infos={[PostInfo.Date, PostInfo.Comment]} theme={theme} data={item} hideCover />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSliderSplitPostInline;
