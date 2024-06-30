import { ThemeVariation } from '@common/enum';
import Layout from '@components/layout';
import TwoColumnSidebar from '@components/posts-layout/two-column-sidebar';
import Instagram from '@components/sections/instagram';
import styled from 'styled-components';

const PostsListContainer = styled.div`
  margin-bottom: ${80 / 14}rem;
`;

const Homepage3 = () => {
  return (
    <Layout title="Homepage 3">
      <PostsListContainer>
        <TwoColumnSidebar />
      </PostsListContainer>
      <Instagram />
    </Layout>
  );
};

export default Homepage3;
