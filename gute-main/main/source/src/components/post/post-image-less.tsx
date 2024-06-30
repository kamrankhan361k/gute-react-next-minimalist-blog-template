import React from 'react';
import classNames from 'classnames';
import { PostProps } from './shared/index';
import moment from 'moment';
import Link from 'next/link';
import { PostCoverType } from '../../store/slices/posts';

const PostImageLess = ({
  data,
  ...props
}: PostProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  const renderIconSrc = () => {
    switch (data.type) {
      case PostCoverType.IMAGE:
        return '/assets/images/icons/category-icon-desgin.png';
      case PostCoverType.VIDEO:
        return '/assets/images/icons/category-icon-graphic.png';
      case PostCoverType.AUDIO:
        return '/assets/images/icons/category-icon-technology.png';

      default:
        return '/assets/images/icons/category-icon-typography.png';
    }
  };
  return (
    <div {...props} className={classNames('post-card', '-image-less', props.className)}>
      <div className="category-icon">
        <img src={renderIconSrc()} alt="Design" />
      </div>
      <div className="card-content">
        <h5 className="card-content__category">{data.category.name}</h5>
        <Link href="/post/[id]" as={`/post/${data.id}`}>
          <a href={`/post/${data.id}`} className="card-content__title">
            {data.title}
          </a>
        </Link>
        <div className="card-content__info">
          <div className="card-content__info-item card-content__info-item__author">
            <i className="far fa-user"></i>
            <Link href="/author/[id]" as={'/author/' + data.user.id}>
              <a href={'/author/' + data.user.id}>{data.user.fullName}</a>
            </Link>
          </div>
          <div className="card-content__info-item card-content__info-item__time">
            <i className="far fa-clock"></i>
            <p>{moment(data.publicDate).format('DD/MM/YYYY')}</p>
          </div>
          <div className="card-content__info-item card-content__info-comment">
            <i className="far fa-comment"></i>
            <p>{data.comments?.length || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostImageLess;
