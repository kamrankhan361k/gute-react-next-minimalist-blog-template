import Layout from '@components/layout';
import { PostView } from '@components/posts-layout/shared/posts-header-bar';
import ToggleViewSidebar from '@components/posts-layout/toggle-view-sidebar';
import TwoColumnSidebar from '@components/posts-layout/two-column-sidebar';
import Instagram from '@components/sections/instagram';
import styled from 'styled-components';

const PostsListContainer = styled.div`
  margin-bottom: ${80 / 14}rem;
`;

const BlogCategoryList = () => {
  return (
    <Layout title="Blog Category Grid">
      <PostsListContainer>
        <ToggleViewSidebar defaultView={PostView.Row}/>
      </PostsListContainer>
      <Instagram />
    </Layout>
  );
};

export default BlogCategoryList;
