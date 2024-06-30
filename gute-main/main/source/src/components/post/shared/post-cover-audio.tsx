import { PostItem } from '@store/slices/posts';
import React from 'react';
import ReactPlayer from 'react-player';
import { BaseReactPlayerProps } from 'react-player/base';

const PostCoverAudio = ({ data, ...props }: { data: PostItem } & BaseReactPlayerProps) => {
  return (
    <div className="card-cover">
      <div className="player-wrapper">
        <ReactPlayer controls className="react-player" url={data.audio} {...props} />
      </div>
    </div>
  );
};

export default PostCoverAudio;
