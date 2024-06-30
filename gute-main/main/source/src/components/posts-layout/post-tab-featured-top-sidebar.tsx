import React from 'react';
import PostsTabSidebarTrending from './shared/post-tab-sidebar-trending';
import PostTabFeatureTopRegular from '@components/post-tab/feature-top-regular';

const PostTabFeaturedTopSidebar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 col-lg-4 order-md-2">
          <PostsTabSidebarTrending />
        </div>
        <div className="col-12 col-md-7 col-lg-8 order-md-1">
          <PostTabFeatureTopRegular />
        </div>
      </div>
    </div>
  );
};

export default PostTabFeaturedTopSidebar;
