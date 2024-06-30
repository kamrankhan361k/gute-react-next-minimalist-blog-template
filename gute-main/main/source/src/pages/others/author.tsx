import Layout from '@components/layout';
import Socials from '@components/other/socials';
import { PostView } from '@components/posts-layout/shared/posts-header-bar';
import ToggleViewSidebar from '@components/posts-layout/toggle-view-sidebar';
import Instagram from '@components/sections/instagram';
import { AppState } from '@store';
import { handleGetAuthorDetail, handleGetAuthorPosts } from '@store/thunk/author';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const PostsListContainer = styled.div`
  margin-bottom: ${80 / 14}rem;
`;

const Author = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state: AppState) => state.author.detail);

  useEffect(() => {
    dispatch(handleGetAuthorDetail(1));
    dispatch(handleGetAuthorPosts({ id: 1, _limit: 5, _page: 1 }));
  }, []);

  return (
    <Layout title="Blog Category Grid">
      <PostsListContainer>
        <div className="container">
          <div className="author-info-block">
            <div className="author-info-block__avatar">
              <img src={data?.avatar} alt="Author avatar" />
            </div>
            <div className="author-info-block__info">
              <h5>{data?.fullName}</h5>
              <p>{data?.bio}</p>
              <Socials variant="link" color="light" size="large" spacing={20} />
            </div>
          </div>
        </div>
        <ToggleViewSidebar authorView defaultView={PostView.Row} />
      </PostsListContainer>
      <Instagram />
    </Layout>
  );
};

export default Author;
