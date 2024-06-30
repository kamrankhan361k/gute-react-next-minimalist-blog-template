import React, { useEffect } from 'react';
import styled from 'styled-components';
import GUButton from '@components/control/gu-button';
import { ThemeVariation } from '@common/enum';
import PostImageLess from '@components/post/post-image-less';
import theme from '@theme';
import PostInline from '@components/post/post-inline';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@store';
import { handleGetPosts } from '@store/thunk/post';
import { renderThemeClass } from '@common/functions';
import classNames from 'classnames';
import Loading from '@components/other/loading';

const PostsContainer = styled.div``;

const ButtonContaier = styled.div`
  text-align: center;
`;

const StyledButton = styled(GUButton)`
  text-transform: uppercase;
`;

const StyledPostImageLess = styled(PostImageLess)`
  margin-bottom: ${50 / 14}rem;
  padding-bottom: ${50 / 14}rem;
  border-bottom: 1px solid ${theme.schema.gray.light};
`;

const PostListImageLessFeatured = ({ theme }: { theme?: ThemeVariation }) => {
  const PAGE_SIZE = 4;
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
    <div className="container">
      {fetching ? (
        <Loading theme={theme} />
      ) : (
        <>
          <PostsContainer>
            {!!data.length && <PostInline data={data[0]} className="-banner" />}
            <div className="row">
              {data?.map((item, index) => (
                <div className="col-12 col-lg-6" key={index}>
                  <StyledPostImageLess data={item} theme={theme} />
                </div>
              ))}
            </div>
          </PostsContainer>
          <ButtonContaier>
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
          </ButtonContaier>
        </>
      )}
    </div>
  );
};

export default PostListImageLessFeatured;
