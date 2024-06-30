import { renderThemeClass } from '@common/functions';
import classNames from 'classnames';
import moment from 'moment';
import Link from 'next/link';
import React from 'react';
import { PostProps } from './shared';

interface PostTrending extends PostProps {
  rank?: number;
}

const PostTrending = ({ data, className, theme, rank }: PostTrending) => {
  return (
    <div className={classNames('post-trending', renderThemeClass(theme), className)}>
      <div className="post-trending-image">
        <div className="rank">{rank}</div>
        <img src={data.image as string} alt={data.title} />
      </div>
      <div className="post-trending-content">
        <h5>{data.category.name}</h5>
        <Link href="/post/[id]" as={`/post/${data.id}`}>
          <a href={`/post/${data.id}`}>{data.title}</a>
        </Link>
        <div className="info__time">
          <i className="far fa-clock"></i>
          <p>{moment(data.publicDate).format('DD/MM/YYYY')}</p>
        </div>
      </div>
    </div>
  );
};

export default PostTrending;
