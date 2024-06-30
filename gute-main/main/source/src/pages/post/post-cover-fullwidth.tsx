import Layout from '@components/layout';
import PostDetailContent from '@components/post-detail/content';
import PostDetailHeaderbanner from '@components/post-detail/header/banner';
import Instagram from '@components/sections/instagram';
import { handleGetPostDetail } from '@store/thunk/post';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const PostContentContainer = styled.div`
  margin-bottom: ${80 / 14}rem;
`;

const PostDetailCoverFullwidth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetPostDetail(1));
  }, []);

  return (
    <Layout title="Post standard" showHeaderSpacing={false}>
      <div className="post-standard">
        <PostContentContainer>
          <PostDetailHeaderbanner />
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 mx-auto">
                <PostDetailContent />
              </div>
            </div>
          </div>
        </PostContentContainer>
        <Instagram />
      </div>
    </Layout>
  );
};

export default PostDetailCoverFullwidth;
