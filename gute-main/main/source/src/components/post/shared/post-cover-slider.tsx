import { NextArrow, PrevArrow } from '@components/other/slick-arrows';
import React from 'react';
import Slider, { Settings } from 'react-slick';
import Link from 'next/link';
import { PostItem } from '@store/slices/posts';

const PostCoverSlider = ({ data }: { data: PostItem }) => {
  const settings: Settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider className="card-cover -slide" {...settings}>
      {(data.image as string[]).map((image, index) => (
        <Link key={index} href="/post/[id]" as={'/post/' + data.id}>
          <a href={'/post/' + data.id} className="card-cover__slide-item">
            <img src={image} alt="Post cover" />
          </a>
        </Link>
      ))}
    </Slider>
  );
};

export default PostCoverSlider;
