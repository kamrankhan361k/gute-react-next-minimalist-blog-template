import React from 'react';
import Layout from '@components/layout';
import MasonryRandomWide from '@components/posts-layout/masory-random-wide';

const Homepage6 = () => {
  return (
    <Layout title="Homepage 6">
      {/* There are some trouble with mansonry that we can't fix we are find the way to fix this */}
      <MasonryRandomWide />
    </Layout>
  );
};

export default Homepage6;
