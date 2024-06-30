import Socials from '@components/other/socials';
import React from 'react';

interface PostContentAuthorProps {
  name: string;
  bio?: string;
  avatar?: string;
}

const PostContentAuthor = ({ name, bio, avatar }: PostContentAuthorProps) => {
  return (
    <div className="post-author">
      <div className="post-author-avatar">
        <img src={avatar} alt="Author avatar" />
      </div>
      <div className="post-author-info">
        <h5>{name}</h5>
        <p>{bio}</p>
        <Socials variant="link" spacing={15} />
      </div>
    </div>
  );
};

export default PostContentAuthor;
