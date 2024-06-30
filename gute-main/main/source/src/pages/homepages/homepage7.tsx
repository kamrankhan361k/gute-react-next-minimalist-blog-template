import { ThemeVariation } from '@common/enum';
import Layout from '@components/layout';
import PostTabFeatureLeft from '@components/post-tab/feature-left';
import PostTabFeatureTop from '@components/post-tab/feature-top';
import GridTwoColumn from '@components/post-tab/grid-two-column';
import HeroSliderCarousel from '@components/sections/hero-slider/carousel';
import VideoPlayList from '@components/video-playlist/controlled-list';
import React from 'react';
import styled from 'styled-components';
import Instagram from '@components/sections/instagram';

const SectionContainer = styled.div`
  margin-bottom: ${60 / 14}rem;
`;

const Homepage7 = () => {
  const THEME = ThemeVariation.Secondary;

  return (
    <Layout title="Homepage 7" theme={THEME} showHeaderSpacing={false}>
      <SectionContainer>
        <HeroSliderCarousel theme={THEME} />
      </SectionContainer>
      <SectionContainer>
        <PostTabFeatureLeft theme={THEME} />
      </SectionContainer>
      <SectionContainer>
        <VideoPlayList theme={THEME} />
      </SectionContainer>
      <SectionContainer>
        <PostTabFeatureTop theme={THEME} />
      </SectionContainer>
      <SectionContainer>
        <GridTwoColumn theme={THEME} />
      </SectionContainer>
      <Instagram fullWidth theme={THEME} />
    </Layout>
  );
};

export default Homepage7;
