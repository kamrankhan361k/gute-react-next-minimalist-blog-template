import Layout from '@components/layout';
import PostDetailContent from '@components/post-detail/content';
import PostDetailHeaderbanner from '@components/post-detail/header/banner';
import PostsListSidebar from '@components/posts-layout/shared/posts-list-sidebar';
import Instagram from '@components/sections/instagram';
import { handleGetPostDetail } from '@store/thunk/post';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { AppState } from '@store';
import { PostCoverType } from '@store/slices/posts';
import PostDetailAudioSidebar from './post-audio-sidebar';
import PostDetailVideoSidebar from './post-video-sidebar';
import PostDetailSliderSidebar from './post-slider-sidebar';
import PostDetailStandardSidebar from './post-standard-sidebar';

const PostDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const id = Number(router.query.id);

  const { data } = useSelector((state: AppState) => state.posts.detail);

  useEffect(() => {
    dispatch(handleGetPostDetail(id));
  }, []);

  switch (data?.type) {
    case PostCoverType.AUDIO:
      return <PostDetailAudioSidebar useAsComponent />;
    case PostCoverType.VIDEO:
      return <PostDetailVideoSidebar useAsComponent />;
    case PostCoverType.SLIDE:
      return <PostDetailSliderSidebar useAsComponent />;
    case PostCoverType.SPLIT:
      return <PostDetailSliderSidebar useAsComponent />;
    default:
      return <PostDetailStandardSidebar useAsComponent />;
  }
};

export default PostDetail;
