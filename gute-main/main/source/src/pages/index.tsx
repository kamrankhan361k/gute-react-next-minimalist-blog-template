import Layout from '@components/layout';
import PostListMasonryThreeColumn from '@components/posts-layout/masonry-three-column';
import Instagram from '@components/sections/instagram';
import styled from 'styled-components';

const PostsListContainer = styled.div`
  margin-bottom: ${80 / 14}rem;
`;

const Home = () => {
  return (
    <Layout title="Homepage 1">
      <PostsListContainer>
        <PostListMasonryThreeColumn />
      </PostsListContainer>
      <Instagram />
    </Layout>
  );
};

export default Home;
