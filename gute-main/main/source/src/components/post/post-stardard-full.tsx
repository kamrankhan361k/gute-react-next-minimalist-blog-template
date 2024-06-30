import { renderThemeClass } from '@common/functions';
import classNames from 'classnames';
import React from 'react';
import { PostProps, PostInfo } from './shared';
import moment from 'moment';
import Link from 'next/link';
import PostCoverImage from './shared/post-cover-image';
import PostCoverSlider from './shared/post-cover-slider';
import PostCoverSplit from './shared/post-cover-split';
import PostCoverVideo from './shared/post-cover-video';
import PostCoverAudio from './shared/post-cover-audio';
import styled from 'styled-components';
import GUButton from '@components/control/gu-button';
import { PostCoverType } from '@store/slices/posts';

const StyledButton = styled(GUButton)`
  text-transform: uppercase;
`;

const PostStardardFull = ({
  data,
  className,
  theme,
  hideButton,
  hideDescription,
  infos = [PostInfo.User, PostInfo.Date, PostInfo.Comment],
}: PostProps) => {
  const renderCover = () => {
    switch (data.type) {
      case PostCoverType.AUDIO:
        return <PostCoverAudio data={data} />;
      case PostCoverType.VIDEO:
        return <PostCoverVideo data={data} />;
      case PostCoverType.SLIDE:
        return <PostCoverSlider data={data} />;
      case PostCoverType.SPLIT:
        return <PostCoverSplit data={data} />;
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

  const renderInfos = () => {
    return infos.map((item) => {
      switch (item) {
        case PostInfo.User:
          return (
            <div className="card-content__info-item card-content__info-item__author">
              <i className="far fa-user"></i>
              <Link href="/author/[id]" as={'/author/' + data.user.id}>
                <a href={'/author/' + data.user.id}>{data.user.fullName}</a>
              </Link>
            </div>
          );
        case PostInfo.Date:
          return (
            <div className="card-content__info-item card-content__info-item__time">
              <i className="far fa-clock"></i>
              <p>{moment(data.publicDate).format('DD/MM/YYYY')}</p>
            </div>
          );
        case PostInfo.Comment:
          return (
            <div className="card-content__info-item card-content__info-item__comment">
              <i className="far fa-comment"></i>
              <p>{data.comments?.length || 0}</p>
            </div>
          );
        default:
          return <></>;
      }
    });
  };

  return (
    <div className={classNames('post-card', '-full', renderType(), renderThemeClass(theme), className)}>
      {renderCover()}
      <div className="card-content">
        <h5 className="card-content__category">{data.category.name}</h5>
        <Link href="/post/[id]" as={'/post/' + data.id}>
          <a className="card-content__title" href={'/post/' + data.id}>
            {data.title}
          </a>
        </Link>
        <div className="card-content__info">{renderInfos()}</div>
        {!hideDescription && <p className="card-content__description">{data.description}</p>}
        {!hideButton && (
          <StyledButton color={theme} weight="bold" variant="underline">
            Read more
          </StyledButton>
        )}
      </div>
    </div>
  );
};

export default PostStardardFull;
