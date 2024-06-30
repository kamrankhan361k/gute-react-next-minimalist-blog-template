import Layout from '@components/layout';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';
import PostDetailContent from '@components/post-detail/content';
import PostDetailHeaderbanner from '@components/post-detail/header/banner';
import PostsListSidebar from '@components/posts-layout/shared/posts-list-sidebar';
import Instagram from '@components/sections/instagram';
import { AppState } from '@store';
import { handleGetPostDetail } from '@store/thunk/post';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const PostContentContainer = styled.div`
  margin-bottom: ${80 / 14}rem;
`;

const PostDetailStandardSidebar = ({ useAsComponent }: { useAsComponent?: boolean }) => {
  const dispatch = useDispatch();

  const { data } = useSelector((state: AppState) => state.posts.detail);

  useEffect(() => {
    !useAsComponent && dispatch(handleGetPostDetail(1));
  }, []);

  return (
    <Layout title="Post standard sidebar">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem>{data?.title}</BreadcrumbItem>
        </Breadcrumb>
        <div className="post-standard">
          <PostContentContainer>
            <PostDetailHeaderbanner />
            <div className="row">
              <div className="col-12 col-md-8">
                <PostDetailContent />
              </div>
              <div className="col-12 col-md-4">
                <PostsListSidebar />
              </div>
            </div>
          </PostContentContainer>
          <Instagram />
        </div>
      </div>
    </Layout>
  );
};

export default PostDetailStandardSidebar;
