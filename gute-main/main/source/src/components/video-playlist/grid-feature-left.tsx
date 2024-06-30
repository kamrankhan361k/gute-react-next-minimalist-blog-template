import { ThemeVariation } from '@common/enum';
import { renderThemeClass } from '@common/functions';
import HeaderTitleLine from '@components/other/header-title-line';
import classNames from 'classnames';
import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { handleGetVideos } from '@store/thunk/videos';
import { AppState } from '@store';
import Loading from '@components/other/loading';

const StyledHeaderTitleLine = styled(HeaderTitleLine)`
  h5 {
    font-size: ${26 / 14}rem;
  }
`;

interface VideoGridFeatureLeftProps {
  theme?: ThemeVariation;
  className?: string;
}

const VideoGridFeatureLeft = ({ theme, className }: VideoGridFeatureLeftProps) => {
  const dispatch = useDispatch();

  const { data, fetching } = useSelector((state: AppState) => state.video.list);

  useEffect(() => {
    dispatch(handleGetVideos({ _limit: 5 }));
  }, []);

  return (
    <div className={classNames('video-playlist-featured-left', renderThemeClass(theme), className)}>
      <div className="container">
        <StyledHeaderTitleLine title="Lastest video" />
        {fetching ? (
          <Loading theme={theme} />
        ) : (
          <div className="row no-gutters">
            <div className="col-12 col-lg-6">
              <div className="player-wrapper -big">
                <ReactPlayer controls className="react-player" url={data[0]?.url} />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="row no-gutters">
                {data?.slice(1).map((item) => (
                  <div className="col-12 col-sm-6">
                    <div className="player-wrapper -small">
                      <ReactPlayer controls className="react-player" url={item.url} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoGridFeatureLeft;
