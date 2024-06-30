import React from 'react';
import Link from 'next/link';
import { PostItem } from '@store/slices/posts';

const PostCoverImage = ({ data }: { data: PostItem }) => {
  return (
    <Link href="/post/[id]" as={'/post/' + data.id}>
      <a href={'/post/' + data.id} className="card-cover">
        <img src={data.image as string} alt="Post cover" />
      </a>
    </Link>
  );
};
export default PostCoverImage;
