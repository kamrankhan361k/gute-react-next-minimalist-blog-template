import { ThemeVariation } from '@common/enum';
import { renderThemeClass } from '@common/functions';
import HeaderTitleLine from '@components/other/header-title-line';
import Loading from '@components/other/loading';
import { NextArrow, PrevArrow } from '@components/other/slick-arrows';
import { AppState } from '@store';
import { handleGetVideos } from '@store/thunk/videos';
import classNames from 'classnames';
import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import styled from 'styled-components';

const StyledHeaderTitleLine = styled(HeaderTitleLine)`
  h5 {
    font-size: ${26 / 14}rem;
  }
`;

const VideoFourGridSlide = ({ theme }: { theme?: ThemeVariation }) => {
  const dispatch = useDispatch();

  const { data, fetching } = useSelector((state: AppState) => state.video.list);

  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    dispatch(handleGetVideos({}));
  }, []);

  return (
    <div className={classNames('video-playlist-four-grid-slide', renderThemeClass(theme))}>
      <div className="container">
        <StyledHeaderTitleLine title="Lastest video" className="-large" />
        {fetching ? (
          <Loading theme={theme} />
        ) : (
          <Slider {...settings}>
            {data.map((item, index) => (
              <div className="slide-item" key={index}>
                <div>
                  <ReactPlayer controls className="react-player" url={item.url} />
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default VideoFourGridSlide;
