import { ThemeVariation } from '@common/enum';
import Layout from '@components/layout';
import PostTabFeaturedTopSidebar from '@components/posts-layout/post-tab-featured-top-sidebar';
import PostTwoTabFeaturedTopSidebar from '@components/posts-layout/post-two-tab-sidebar';
import HeroSliderSplitPostInline from '@components/sections/hero-slider/split/post-inline';
import VideoGridFeatureLeft from '@components/video-playlist/grid-feature-left';
import React from 'react';
import styled from 'styled-components';
import Instagram from '@components/sections/instagram';

const SectionContainer = styled.div`
  margin-bottom: ${60 / 14}rem;
`;

const Homepage8 = () => {
  return (
    <Layout title="Homepage 8" showHeaderSpacing={false}>
      <SectionContainer>
        <HeroSliderSplitPostInline />
      </SectionContainer>
      <SectionContainer>
        <PostTabFeaturedTopSidebar />
      </SectionContainer>
      <SectionContainer>
        <VideoGridFeatureLeft />
      </SectionContainer>
      <SectionContainer>
        <PostTwoTabFeaturedTopSidebar />
      </SectionContainer>
      <SectionContainer>
        <Instagram fullWidth />
      </SectionContainer>
    </Layout>
  );
};

export default Homepage8;
