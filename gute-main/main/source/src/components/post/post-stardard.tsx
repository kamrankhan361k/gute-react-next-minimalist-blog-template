import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import moment from 'moment';
import { isArray } from 'lodash';
import PostCoverImage from './shared/post-cover-image';
import PostCoverSlider from './shared/post-cover-slider';
import { PostProps } from './shared';
import { renderThemeClass } from '@common/functions';
import PostCoverAudio from './shared/post-cover-audio';
import PostCoverVideo from './shared/post-cover-video';
import PostCoverSplit from './shared/post-cover-split';
import { PostCoverType } from '@store/slices/posts';

const PostStardard = ({ data, className, theme, hideCover, hideContent, hideInfos }: PostProps) => {
  const renderCover = () => {
    switch (data.type) {
      case PostCoverType.AUDIO:
        return <PostCoverAudio data={data} />;
      case PostCoverType.VIDEO:
        return <PostCoverVideo data={data} />;
      case PostCoverType.SLIDE:
        return <PostCoverSlider data={data} />;
      case PostCoverType.SPLIT:
        return <PostCoverSplit data={data} slidesToShow={2} />;
      default:
        return <PostCoverImage data={data} />;
    }
  };

  const renderType = () => {
    switch (data.type) {
      case PostCoverType.AUDIO:
        return '-audio';
      case PostCoverType.VIDEO:
        return '-video';
      default:
        return '';
    }
  };

  return (
    <div className={classNames('post-card', renderType(), renderThemeClass(theme), className)}>
      {!hideCover && renderCover()}
      {!hideContent && (
        <div className="card-content">
          <h5 className="card-content__category">{data.category.name}</h5>
          <Link href="/post/[id]" as={'/post/' + data.id}>
            <a className="card-content__title" href={'/post/' + data.id}>
              {data.title}
            </a>
          </Link>
          {!hideInfos && (
            <div className="card-content__info">
              <div className="card-content__info-item card-content__info-item__author">
                <i className="far fa-user" />
                <Link href="/author/[id]" as={'/author/' + data.user?.id}>
                  <a href={'/author/' + data.user?.id}>{data.user?.fullName}</a>
                </Link>
              </div>
              <div className="card-content__info-item">
                <i className="far fa-clock" />
                <p>{moment(data.publicDate).format('DD/MM/YYYY')}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PostStardard;
