import moment from 'moment';
import React from 'react';
import { PostProps } from './shared';
import classNames from 'classnames';
import { renderThemeClass } from '@common/functions';
import Link from 'next/link';

const PostTiny = ({ data, className, theme }: PostProps) => {
  return (
    <div className={classNames('post-card -tiny', className, renderThemeClass(theme))}>
      <Link href="/author/[id]" as={'/author/' + data.user?.id}>
        <a className="card-cover" href={'/author/' + data.user?.id}>
          <img src={data.image as string} alt={data.title} />
        </a>
      </Link>
      <div className="card-content">
        <h5 className="card-content__category">{data.category.name}</h5>
        <Link href="/post/[id]" as={`/post/${data.id}`}>
          <a className="card-content__title" href={`/post/${data.id}`}>
            {data.title}
          </a>
        </Link>
        <div className="card-content__info">
          <div className="info__time">
            <i className="far fa-clock"></i>
            <p>{moment(data.publicDate).format('DD/MM/YYYY')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTiny;
