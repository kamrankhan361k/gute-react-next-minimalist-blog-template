import Layout from '@components/layout';
import ToggleViewSidebar from '@components/posts-layout/toggle-view-sidebar';
import Instagram from '@components/sections/instagram';
import { handleGetPosts } from '@store/thunk/post';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const PostsListContainer = styled.div`
  margin-bottom: ${80 / 14}rem;
`;

const CategoryDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const id = Number(router.query.id);

  useEffect(() => {
    id && dispatch(handleGetPosts({ 'category.id_like': id }));
  }, [id]);

  return (
    <Layout title="Blog Category Grid">
      <PostsListContainer>
        <ToggleViewSidebar />
      </PostsListContainer>
      <Instagram />
    </Layout>
  );
};

export default CategoryDetail;
