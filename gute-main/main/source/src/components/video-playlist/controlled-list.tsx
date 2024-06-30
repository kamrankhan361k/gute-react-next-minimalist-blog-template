import { ThemeVariation } from '@common/enum';
import { renderThemeClass } from '@common/functions';
import { AppState } from '@store';
import { handleGetVideos } from '@store/thunk/videos';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';

const VideoPlayList = ({ theme }: { theme: ThemeVariation }) => {
  const dispatch = useDispatch();

  const { data } = useSelector((state: AppState) => state.video.list);

  const [currentVideo, setCurrentVideo] = useState(data[0]);

  const calculateMinutes = (totalSeconds: number) => {
    let hours = String(Math.floor(totalSeconds / 3600));
    totalSeconds %= 3600;
    let minutes = String(Math.floor(totalSeconds / 60));
    let seconds = String(totalSeconds % 60);

    minutes = minutes.padStart(2, '0');
    hours = hours.padStart(2, '0');
    seconds = seconds.padStart(2, '0');
    return hours + ':' + minutes + ':' + seconds;
  };

  useEffect(() => {
    dispatch(handleGetVideos({ _limit: 5 }));
  }, []);

  return currentVideo ? (
    <div className={classNames('video-playlist-controlled', renderThemeClass(theme))}>
      <div className="container">
        <div className="row no-gutters">
          <div className="col-12 col-md-8">
            <div className="video-playlist-controlled-view">
              <div className="player-wrapper">
                <ReactPlayer controls className="react-player" url={currentVideo.url} />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="video-playlist-controlled-list">
              <div className="video-playlist-controlled-list__header">
                <h5>Feature video</h5>
                <p>{data.length} video</p>
              </div>
              <div className="video-playlist-controlled-list__content">
                {data.map((item, index) => (
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentVideo(item);
                    }}
                    key={index}
                    className={classNames('video-playlist-controlled-list__content__item', {
                      active: currentVideo.id === item.id,
                    })}
                    href="#"
                    data-src="25323516">
                    <div className="item__image">
                      <img src={item.thumbnail} alt={item.title} />
                    </div>
                    <div className="item__detail">
                      <h5>{item.title}</h5>
                      <p>{calculateMinutes(item.duration)}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default VideoPlayList;
