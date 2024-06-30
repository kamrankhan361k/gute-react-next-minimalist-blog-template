import React from 'react';
import { PostInfo, PostProps } from './shared';
import moment from 'moment';
import { renderThemeClass } from '@common/functions';
import classNames from 'classnames';
import Link from 'next/link';

const PostInline = ({
  data,
  theme,
  className,
  hide = [],
  infos = [PostInfo.User, PostInfo.Date, PostInfo.Comment],
}: PostProps & { hide?: string[] }) => {
  const renderInfos = () => {
    return infos?.map((item) => {
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
    <div className={classNames('post-card', '-inner-text', className, renderThemeClass(theme))}>
      <Link href="/post/[id]" as={`/post/${data.id}`}>
        <a className="card-cover" href={`/post/${data.id}`}>
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
        <div className="card-content__info">{renderInfos()}</div>
      </div>
    </div>
  );
};

export default PostInline;
