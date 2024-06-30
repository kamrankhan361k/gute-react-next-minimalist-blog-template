import { ThemeVariation } from '@common/enum';
import PostTabFeatureTopRegular from '@components/post-tab/feature-top-regular';
import PostTabFeatureInterleavedRegular from '@components/post-tab/featured-interleaved';
import React from 'react';
import PostsTwoTabsSidebar from './shared/post-two-tabs-sidebar';

const PostTabInterleavedFeaturedSidebar = ({ theme }: { theme: ThemeVariation }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 col-lg-4 order-md-2">
          <PostsTwoTabsSidebar theme={theme} />
        </div>
        <div className="col-12 col-md-7 col-lg-8 order-md-1">
          <PostTabFeatureInterleavedRegular theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default PostTabInterleavedFeaturedSidebar;
