import { ThemeVariation } from '@common/enum';
import Loading from '@components/other/loading';
import Pagination from '@components/other/pagination';
import PostStardardFull from '@components/post/post-stardard-full';
import { AppState } from '@store';
import { handleGetLastestPosts } from '@store/thunk/post';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PostTabHeader from './shared/header';

const StyledPostStardardFull = styled(PostStardardFull)`
  margin-bottom: ${30 / 14}rem;
`;

const PostsTabontainer = styled.div`
  margin-bottom: ${15 / 14}rem;
`;

const PostTabTwoRow = ({ theme }: { theme?: ThemeVariation }) => {
  const dispatch = useDispatch();
  const PAGE_SIZE = 4;
  const types = 'image';

  const [currentCategory, setCurrentCategory] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, fetching, meta } = useSelector((state: AppState) => state.posts.lastest);
  const { data: categoriesData } = useSelector((state: AppState) => state.posts.categories);

  const tabs = [
    { name: 'All', value: 0 },
    ...categoriesData.map((item) => ({
      name: item.name,
      value: item.id,
    })),
  ];

  useEffect(() => {
    dispatch(
      handleGetLastestPosts({
        _limit: PAGE_SIZE,
        _page: currentPage,
        type_like: types,
        'category.id_like': currentCategory || null,
      }),
    );
  }, [currentCategory, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [currentCategory]);

  return (
    <div className="news-block -row">
      <div className="container">
        <PostsTabontainer>
          <PostTabHeader
            theme={theme}
            value={currentCategory}
            onChange={(val) => setCurrentCategory(Number(val))}
            title="Lastest posts"
            tabLinks={tabs}
          />
          {fetching ? (
            <Loading theme={theme} />
          ) : (
            <div className="row">
              <div className="col-12">
                {data.map((item, index) => (
                  <StyledPostStardardFull
                    key={index}
                    theme={theme}
                    data={item}
                    hideDescription
                    hideButton
                    className="-no-content-padding -small -horizontal"
                  />
                ))}
              </div>
            </div>
          )}
        </PostsTabontainer>
        <Pagination
          onPageChange={(p) => setCurrentPage(p.selected + 1)}
          pageCount={meta?.pageCount || 1}
          initialPage={0}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default PostTabTwoRow;
