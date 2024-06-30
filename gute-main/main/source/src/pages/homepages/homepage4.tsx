import Layout from '@components/layout';
import PostListImageLessFeatured from '@components/posts-layout/image-less-featured';
import Instagram from '@components/sections/instagram';
import styled from 'styled-components';

const PostsListContainer = styled.div`
  margin-bottom: ${80 / 14}rem;
`;

const Homepage4 = () => {
  return (
    <Layout title="Homepage 4">
      <PostsListContainer>
        <PostListImageLessFeatured />
      </PostsListContainer>
      <Instagram />
    </Layout>
  );
};

export default Homepage4;
