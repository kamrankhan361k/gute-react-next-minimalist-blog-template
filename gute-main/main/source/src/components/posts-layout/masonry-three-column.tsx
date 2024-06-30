import React, { useEffect } from 'react';
import PostStardard from '@components/post/post-stardard';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import GUButton from '@components/control/gu-button';
import { ThemeVariation } from '@common/enum';
import { AppState } from '@store';
import { useSelector, useDispatch } from 'react-redux';
import { renderThemeClass } from '@common/functions';
import classNames from 'classnames';
import { handleGetPosts } from '@store/thunk/post';
import Loading from '@components/other/loading';

const PostsContainer = styled.div`
  margin-bottom: ${50 / 14}rem;
`;

const ButtonContaier = styled.div`
  text-align: center;
`;

const StyledButton = styled(GUButton)`
  text-transform: uppercase;
`;

const PostListMasonryThreeColumn = ({ theme }: { theme?: ThemeVariation }) => {
  const dispatch = useDispatch();
  const PAGE_SIZE = 6;
  const types = 'image|slide|split';

  const { data, fetching, meta, loadingMore } = useSelector((state: AppState) => state.posts.list);

  useEffect(() => {
    dispatch(handleGetPosts({ _limit: PAGE_SIZE, type_like: types }));
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    768: 2,
    576: 1,
  };

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
              breakpointCols={breakpointColumnsObj}
              className="masonry-grid"
              columnClassName="masonry-grid_column">
              {data?.map((item: any, index: number) => (
                <PostStardard className="-center" key={index} data={item} theme={theme} />
              ))}
            </Masonry>
          </PostsContainer>
          {meta && meta.page < meta.pageCount && (
            <ButtonContaier>
              <StyledButton
                disabled={loadingMore}
                preffix={loadingMore && <i className="fal fa-spinner-third" />}
                onClick={onLoadingMore}
                variant="contained"
                color={theme}
                shape="round"
                weight="bold">
                Load more posts
              </StyledButton>
            </ButtonContaier>
          )}
        </>
      )}
    </div>
  );
};

export default PostListMasonryThreeColumn;
