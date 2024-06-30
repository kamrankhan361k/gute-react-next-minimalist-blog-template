import { ThemeVariation } from '@common/enum';
import Layout from '@components/layout';
import PostTabFeatureCenter from '@components/post-tab/feature-center';
import PostTabInterleavedFeaturedSidebar from '@components/posts-layout/post-interleaved-featured-sidebar';
import HeroSliderSplitPostBox from '@components/sections/hero-slider/split/post-box';
import Instagram from '@components/sections/instagram';
import VideoFourGridSlide from '@components/video-playlist/four-grid-slide';
import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  margin-bottom: ${60 / 14}rem;
`;

const StyledHeroSliderSplitPostBox = styled(HeroSliderSplitPostBox)`
  margin-top: ${30 / 14}rem;
`;

const Homepage9 = () => {
  const THEME = ThemeVariation.Third;
  return (
    <Layout title="Homepage 9" showHeaderSpacing={false} theme={THEME}>
      <SectionContainer>
        <StyledHeroSliderSplitPostBox theme={THEME} />
      </SectionContainer>
      <SectionContainer>
        <PostTabInterleavedFeaturedSidebar theme={THEME} />
      </SectionContainer>
      <SectionContainer>
        <VideoFourGridSlide />
      </SectionContainer>
      <SectionContainer>
        <PostTabFeatureCenter theme={THEME} />
      </SectionContainer>
      <SectionContainer>
        <Instagram fullWidth theme={THEME} />
      </SectionContainer>
    </Layout>
  );
};

export default Homepage9;
