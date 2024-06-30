import { ThemeVariation } from '@common/enum';
import CategoryBar from '@components/category/bar';
import Loading from '@components/other/loading';
import PostTrending from '@components/post/post-trending';
import SubcribeCard, { SubcribeCardFormProps } from '@components/subcribe-card';
import { AppState } from '@store';
import { PostCategoriesType } from '@store/slices/posts';
import { handleGetTrendingPosts, handlePostCategories } from '@store/thunk/post';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledPostTrending = styled(PostTrending)`
  &:not(:last-child) {
    margin-bottom: ${20 / 14}rem;
  }
`;

const PostsListSidebar = ({ theme }: { theme?: ThemeVariation }) => {
  const dispatch = useDispatch();

  const { data: categoriesData, fetching: categoriesFetching } = useSelector(
    (state: AppState) => state.posts.categories,
  );
  const { data: trendingData, fetching: trendingFetching } = useSelector((state: AppState) => state.posts.trendingList);

  useEffect(() => {
    dispatch(handleGetTrendingPosts({ _limit: 5 }));
    dispatch(handlePostCategories({}));
  }, []);

  const onFormSubmit = (val: SubcribeCardFormProps) => {
    console.log(val);
  };

  return (
    <div className="blog-sidebar">
      <div className="blog-sidebar-section -category">
        <div className="blog-sidebar-section__title">
          <h5>Categories</h5>
        </div>
        {categoriesFetching ? (
          <Loading theme={theme} />
        ) : (
          categoriesData?.map((item, index) => <CategoryBar key={index} data={item} />)
        )}
      </div>
      <div className="blog-sidebar-section -category">
        <div className="blog-sidebar-section__title">
          <h5>Trending post</h5>
        </div>
        {trendingFetching ? (
          <Loading theme={theme} />
        ) : (
          trendingData.map((post, index) => (
            <StyledPostTrending theme={theme} key={index} data={post} rank={index + 1} />
          ))
        )}
      </div>
      <SubcribeCard onSubmit={onFormSubmit} theme={theme} />
    </div>
  );
};

export default PostsListSidebar;
