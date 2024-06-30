import PostTabTwoRow from '@components/post-tab/row';
import PostTabTwoFeatureTop from '@components/post-tab/two-feature-top';
import PostTabTwoFeatureTopRegular from '@components/post-tab/two-feature-top';
import React from 'react';
import PostsTabSidebarTrending from './shared/post-tab-sidebar-trending';
import styled from 'styled-components';
import PostsTwoTabsSidebar from './shared/post-two-tabs-sidebar';
import { ThemeVariation } from '@common/enum';

const SectionContainer = styled.div`
  margin-bottom: ${60 / 14}rem;
`;

const PostTwoTabFeaturedTopSidebar = ({ theme }: { theme?: ThemeVariation }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 col-lg-4 order-md-2">
          <PostsTwoTabsSidebar theme={theme} />
        </div>
        <div className="col-12 col-md-7 col-lg-8 order-md-1">
          <SectionContainer>
            <PostTabTwoFeatureTop />
          </SectionContainer>
          <PostTabTwoRow />
        </div>
      </div>
    </div>
  );
};

export default PostTwoTabFeaturedTopSidebar;
