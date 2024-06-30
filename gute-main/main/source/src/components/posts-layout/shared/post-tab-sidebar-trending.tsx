import { ThemeVariation } from '@common/enum';
import HeaderTitleLine from '@components/other/header-title-line';
import Loading from '@components/other/loading';
import PostTrending from '@components/post/post-trending';
import { AppState } from '@store';
import { handleGetTrendingPosts } from '@store/thunk/post';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

interface FormProps {
  email: string;
}

const StyledPostTrending = styled(PostTrending)`
  &:not(:last-child) {
    margin-bottom: ${20 / 14}rem;
  }
`;

const PostsTabSidebarTrending = ({ theme }: { theme?: ThemeVariation }) => {
  const dispatch = useDispatch();

  const { data, fetching } = useSelector((state: AppState) => state.posts.trendingList);

  useEffect(() => {
    dispatch(handleGetTrendingPosts({ _limit: 5 }));
  }, []);

  return (
    <div className="blog-sidebar">
      <div className="blog-sidebar-section -category">
        <HeaderTitleLine title="Editor's picks" />
        {fetching ? (
          <Loading theme={theme} />
        ) : (
          data.map((post, index) => <StyledPostTrending theme={theme} key={index} data={post} rank={index + 1} />)
        )}
      </div>
    </div>
  );
};

export default PostsTabSidebarTrending;
