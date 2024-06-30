import { ThemeVariation } from '@common/enum';
import GUButton from '@components/control/gu-button';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import PostsListSidebar from './shared/posts-list-sidebar';
import Masonry from 'react-masonry-css';
import PostStardard from '@components/post/post-stardard';
import { useDispatch, useSelector } from 'react-redux';
import { handleGetPosts } from '@store/thunk/post';
import { AppState } from '@store';
import classNames from 'classnames';
import { renderThemeClass } from '@common/functions';
import Loading from '@components/other/loading';

const StyledPostStardard = styled(PostStardard)`
  margin-bottom: ${60 / 14}rem;
`;

const PostsContainer = styled.div`
  margin-bottom: ${50 / 14}rem;
`;

const ButtonContaier = styled.div`
  text-align: center;
`;

const StyledButton = styled(GUButton)`
  text-transform: uppercase;
`;

const TwoColumnSidebar = ({ theme }: { theme?: ThemeVariation }) => {
  const PAGE_SIZE = 8;
  const dispatch = useDispatch();
  const types = 'image|slide|split|video';

  const { data, fetching, meta, loadingMore } = useSelector((state: AppState) => state.posts.list);

  useEffect(() => {
    dispatch(handleGetPosts({ _limit: PAGE_SIZE, type_like: types }));
  }, []);

  const onLoadingMore = () => {
    if (meta && data.length && meta.page < meta.pageCount) {
      dispatch(handleGetPosts({ _limit: PAGE_SIZE, _page: meta.page + 1, loadingMore: true, type_like: types }));
    }
  };

  const breakpointColumnsObj = {
    default: 2,
    768: 1,
    576: 1,
  };

  return (
    <div className="container">
      <div className="row">
      <div className="col-12 col-md-5 col-lg-4 order-md-2">
          <PostsListSidebar theme={theme} />
        </div>
        <div className="col-12 col-md-7 col-lg-8 order-md-1">
          {fetching ? (
            <Loading theme={theme} />
          ) : (
            <>
              <PostsContainer>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="masonry-grid"
                  columnClassName="masonry-grid_column">
                  {data?.map((item) => (
                    <StyledPostStardard className="-center" theme={theme} data={item} />
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
      </div>
    </div>
  );
};

export default TwoColumnSidebar;
