import Layout from '@components/layout';
import OneColumnSidebar from '@components/posts-layout/one-column-sidebar';
import Instagram from '@components/sections/instagram';
import styled from 'styled-components';

const PostsListContainer = styled.div`
  margin-bottom: ${80 / 14}rem;
`;

const Homepage2 = () => {
  return (
    <Layout title="Homepage 2">
      <PostsListContainer>
        <OneColumnSidebar />
      </PostsListContainer>
      <Instagram />
    </Layout>
  );
};

export default Homepage2;
