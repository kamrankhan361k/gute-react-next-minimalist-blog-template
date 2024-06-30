import { ThemeVariation } from '@common/enum';
import CategorySquare from '@components/category/square';
import HeaderTitleLine from '@components/other/header-title-line';
import Loading from '@components/other/loading';
import Socials from '@components/other/socials';
import SubcribeCard, { SubcribeCardFormProps } from '@components/subcribe-card';
import { AppState } from '@store';
import { PostCategoriesType } from '@store/slices/posts';
import { handlePostCategories } from '@store/thunk/post';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const CategoryBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25em;
`;

const PostsTwoTabsSidebar = ({ theme }: { theme?: ThemeVariation }) => {
  const dispatch = useDispatch();

  const { data, fetching } = useSelector((state: AppState) => state.posts.categories);

  useEffect(() => {
    dispatch(handlePostCategories({}));
  }, []);

  const onFormSubmit = (val: SubcribeCardFormProps) => {
    console.log(val);
  };

  return (
    <div className="blog-sidebar">
      <div className="blog-sidebar-section">
        <HeaderTitleLine title="Social" />
        <Socials spacing={10} height={50} width={50} variant="contained" size="small" shape="circle" color="light" />
      </div>
      <div className="blog-sidebar-section">
        <HeaderTitleLine title="Editor's picks" />
        {fetching ? (
          <Loading theme={theme} />
        ) : (
          <CategoryBlock>
            {data.map((item, index) => (
              <CategorySquare key={index} data={item} theme={theme} />
            ))}
          </CategoryBlock>
        )}
      </div>
      <SubcribeCard onSubmit={onFormSubmit} theme={theme} colored />
    </div>
  );
};

export default PostsTwoTabsSidebar;
