import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import GUButton from '@components/control/gu-button';
import Link from 'next/link';
import { ThemeVariation } from '@common/enum';
import { PostItem } from '@store/slices/posts';

const StyledButton = styled(GUButton)`
  text-transform: uppercase;
`;

const PostContentFull = ({ data, theme }: { data: PostItem; theme?: ThemeVariation }) => {
  return (
    <div className="card-content">
      <h5 className="card-content__category">Technology</h5>
      <Link href="/post/[id]" as={'/post/' + data.id}>
        <a className="card-content__title" href={'/post/' + data.id}>
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
      <p className="card-content__description">{data.description}</p>
      <StyledButton color={theme} weight="bold" variant="underline">
        Read more
      </StyledButton>
    </div>
  );
};

export default PostContentFull;
