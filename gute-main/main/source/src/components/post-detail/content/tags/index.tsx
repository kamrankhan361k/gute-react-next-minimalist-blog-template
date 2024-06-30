import GUButton from '@components/control/gu-button';
import { AppState } from '@store';
import React from 'react';
import { useSelector } from 'react-redux';

const PostTagsGroup = () => {
  const { data } = useSelector((state: AppState) => state.posts.detail);

  return (
    <div className="post-tags center">
      <div className="post-tags-group">
        {data?.tags?.map((item) => (
          <GUButton variant="contained" color="light" size="small">
            {item.name}
          </GUButton>
        ))}
      </div>
    </div>
  );
};

export default PostTagsGroup;
