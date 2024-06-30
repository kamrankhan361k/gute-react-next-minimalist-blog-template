import Layout from '@components/layout';
import ToggleViewSidebar from '@components/posts-layout/toggle-view-sidebar';
import Instagram from '@components/sections/instagram';
import styled from 'styled-components';

const PostsListContainer = styled.div`
  margin-bottom: ${80 / 14}rem;
`;

const BlogCategoryGrid = () => {
  return (
    <Layout title="Blog Category Grid">
      <PostsListContainer>
        <ToggleViewSidebar />
      </PostsListContainer>
      <Instagram />
    </Layout>
  );
};

export default BlogCategoryGrid;
