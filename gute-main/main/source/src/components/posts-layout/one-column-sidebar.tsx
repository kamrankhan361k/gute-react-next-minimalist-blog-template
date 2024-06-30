import { ThemeVariation } from '@common/enum';
import GUButton from '@components/control/gu-button';
import PostStardardFull from '@components/post/post-stardard-full';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import PostsListSidebar from './shared/posts-list-sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@store';
import { handleGetPosts } from '@store/thunk/post';
import classNames from 'classnames';
import { renderThemeClass } from '@common/functions';
import Loading from '@components/other/loading';

const StyledPostStardardFull = styled(PostStardardFull)`
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

const OneColumnSidebar = ({ theme }: { theme?: ThemeVariation }) => {
  const PAGE_SIZE = 5;
  const dispatch = useDispatch();

  const { data, fetching, meta, loadingMore } = useSelector((state: AppState) => state.posts.list);

  useEffect(() => {
    dispatch(handleGetPosts({ _limit: PAGE_SIZE }));
  }, []);

  const onLoadingMore = () => {
    if (meta && data.length && meta.page < meta.pageCount) {
      dispatch(handleGetPosts({ _limit: PAGE_SIZE, _page: meta.page + 1, loadingMore: true }));
    }
  };

  return (
    <div className="blog-mansonry-one-column">
      <div className="container">
        {fetching ? (
          <Loading theme={theme} />
        ) : (
          <div className="row">
            <div className="col-12 col-md-5 col-lg-4 order-md-2">
              <PostsListSidebar theme={theme} />
            </div>
            <div className="col-12 col-md-7 col-lg-8 order-md-1">
              <div className="blog-mansonry-one-column-content">
                <PostsContainer>
                  {data?.map((item) => (
                    <StyledPostStardardFull theme={theme} data={item} />
                  ))}
                </PostsContainer>
              </div>
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OneColumnSidebar;
