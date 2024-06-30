import PostInline from '@components/post/post-inline';
import React, { useEffect } from 'react';
import classNames from 'classnames';
import Masonry, { MasonryOptions } from 'react-masonry-component';
import styled from 'styled-components';
import GUButton from '@components/control/gu-button';
import { ThemeVariation } from '@common/enum';
import { useDispatch, useSelector } from 'react-redux';
import { handleGetPosts } from '@store/thunk/post';
import { AppState } from '@store';
import { renderThemeClass } from '@common/functions';
import Loading from '@components/other/loading';
import { PostItem } from '@store/slices/posts';

const PostsContainer = styled.div``;

const ButtonContaier = styled.div`
  text-align: center;
`;

const StyledButton = styled(GUButton)`
  text-transform: uppercase;
`;

const masonryOptions: MasonryOptions = {
  transitionDuration: 0,
  gutter: 20,
  itemSelector: '.grid-item',
};

const MasonryRandom = ({ theme }: { theme?: ThemeVariation }) => {
  const dispatch = useDispatch();
  const PAGE_SIZE = 12;

  const types = 'image';

  const { data, fetching, meta } = useSelector((state: AppState) => state.posts.list);

  const renderSize = (data: any) => {
    return data === 2 ? '-long' : '-small';
  };

  useEffect(() => {
    dispatch(handleGetPosts({ _limit: PAGE_SIZE, type_like: types }));
  }, []);

  const onLoadingMore = () => {
    if (meta && data.length && meta.page < meta.pageCount) {
      dispatch(handleGetPosts({ _limit: PAGE_SIZE, type_like: types, _page: meta.page + 1, loadingMore: true }));
    }
  };

  return (
    <div className="container">
      {fetching ? (
        <Loading theme={theme} />
      ) : (
        <>
          <PostsContainer>
            <Masonry
              className={'blog-inline__mansonry-content'}
              options={masonryOptions}
              disableImagesLoaded={false}
              updateOnEachImageLoad={false}>
              {data.map((item: PostItem, index) => (
                <div className="grid-item">
                  <PostInline hide={['author']} data={item} className="-middle -center" />
                </div>
              ))}
            </Masonry>
          </PostsContainer>
          {meta && meta.page < meta.pageCount && (
            <ButtonContaier>
              <StyledButton onClick={onLoadingMore} variant="contained" color={theme} shape="round" weight="bold">
                Load more posts
              </StyledButton>
            </ButtonContaier>
          )}
        </>
      )}
    </div>
  );
};

export default MasonryRandom;
