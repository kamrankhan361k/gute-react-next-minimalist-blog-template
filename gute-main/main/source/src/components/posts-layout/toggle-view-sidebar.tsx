import { ThemeVariation } from '@common/enum';
import Loading from '@components/other/loading';
import Pagination from '@components/other/pagination';
import PostStardard from '@components/post/post-stardard';
import { AppState } from '@store';
import { handleGetPosts } from '@store/thunk/post';
import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PostsHeaderBar, { PostView } from './shared/posts-header-bar';
import PostsListSidebar from './shared/posts-list-sidebar';
import PostStardardFull from '@components/post/post-stardard-full';
import { PostInfo } from '@components/post/shared';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';

const PostsContainer = styled.div`
  margin-bottom: ${50 / 14}rem;
`;

const StyledPostStardard = styled(PostStardard)`
  margin-bottom: ${60 / 14}rem;
`;

const StyledPostStardardFull = styled(PostStardardFull)`
  margin-bottom: ${20 / 14}rem;
`;

const ToggleViewSidebar = ({
  theme,
  defaultView,
  authorView,
}: {
  theme?: ThemeVariation;
  defaultView?: PostView;
  authorView?: boolean;
}) => {
  const PAGE_SIZE = 6;
  const dispatch = useDispatch();
  const types = 'image|slide|split';

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentView, setCurrentView] = useState<PostView>(defaultView || PostView.Grid);

  const { data, fetching, meta } = useSelector((state: AppState) =>
    authorView ? state.author.posts : state.posts.list,
  );

  useEffect(() => {
    !authorView && dispatch(handleGetPosts({ _limit: PAGE_SIZE, _page: currentPage, type_like: types }));
  }, [currentPage]);

  const breakpointColumnsObj = {
    default: 2,
    768: 1,
    576: 1,
  };

  return (
    <div className="blog-toggle-view">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 col-lg-4 order-md-2">
            <PostsListSidebar theme={theme} />
          </div>
          <div className="col-12 col-md-7 col-lg-8 order-md-1">
            <Breadcrumb>
              <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
                Home
              </BreadcrumbItem>
              <BreadcrumbItem href="/blog-category-grid">Blog</BreadcrumbItem>
              <BreadcrumbItem>Typography</BreadcrumbItem>
            </Breadcrumb>
            <PostsHeaderBar currentView={currentView} getCurrentView={setCurrentView} />
            {fetching ? (
              <Loading theme={theme} />
            ) : currentView === PostView.Row ? (
              <PostsContainer>
                {data?.map((item) => (
                  <StyledPostStardardFull
                    infos={[PostInfo.User, PostInfo.Comment]}
                    className="-small -horizontal -row"
                    theme={theme}
                    data={item}
                    hideButton
                  />
                ))}
              </PostsContainer>
            ) : (
              <PostsContainer>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="masonry-grid"
                  columnClassName="masonry-grid_column">
                  {data?.map((item) => (
                    <StyledPostStardard className="-center -grid" theme={theme} data={item} />
                  ))}
                </Masonry>
              </PostsContainer>
            )}
            <Pagination
              onPageChange={(p) => setCurrentPage(p.selected + 1)}
              pageCount={meta?.pageCount || 1}
              initialPage={0}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleViewSidebar;
