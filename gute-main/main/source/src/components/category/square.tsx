import { renderThemeClass } from '@common/functions';
import { ThemeVariation } from '@common/enum';
import React from 'react';
import { PostItemCategory } from '@store/slices/posts';
import classNames from 'classnames';
import Link from 'next/link';

const CategorySquare = ({ data, theme }: { data: PostItemCategory; theme?: ThemeVariation }) => {
  return (
    <Link href="/post/category/[id]" as={`/post/category/${data.id}`}>
      <a className={classNames('category -square', renderThemeClass(theme))} href={`/post/category/${data.id}`}>
        <div className="category__background" style={{ backgroundImage: `url(${data.image})` }}></div>
        <h5 className="title">{data.name}</h5>
        <h5 className="quantity">{data.quantity}</h5>
      </a>
    </Link>
  );
};

export default CategorySquare;
