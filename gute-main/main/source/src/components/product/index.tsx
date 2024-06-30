import GUButton from '@components/control/gu-button';
import { AppState } from '@store';
import { RequestStatus } from '@store/shared';
import { ProductItem } from '@store/slices/products';
import { handleAddToCart } from '@store/thunk/cart';
import classNames from 'classnames';
import { times } from 'lodash';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface ProductProps {
  data: ProductItem;
  className?: string;
}

const Product = ({ data, className }: ProductProps) => {
  const dispatch = useDispatch();

  const { status } = useSelector((state: AppState) => state.cart.addToCart);
  const { data: cartData } = useSelector((state: AppState) => state.cart.list);

  return (
    <div className={classNames('product', className)}>
      <div className="product-cover">
        <Link href="/product/[id]" as={`/product/${data.id}`}>
          <a className="product-image" href={`/product/${data.id}`}>
            <img src={data.cover} alt={data.name} />
          </a>
        </Link>
        <GUButton
          preffix={status == RequestStatus.Loading && <i className="fal fa-spinner-third fa-spin" />}
          disabled={status == RequestStatus.Loading || !!cartData.find((item) => item.id === data.id)}
          onClick={() => {
            !cartData.find((item) => item.id === data.id) && dispatch(handleAddToCart({ ...data, cartQuantity: 1 }));
          }}
          variant="contained"
          color="primary"
          shape="round">
          Add to cart
        </GUButton>
      </div>
      <div className="product-content">
        <div className="product-content__left">
          <Link href="/product/[id]" as={`/product/${data.id}`}>
            <a href={`/product/${data.id}`}>{data.name}</a>
          </Link>
          <div className="star">
            {times(data.rate, () => (
              <i className="fas fa-star"></i>
            ))}
          </div>
        </div>
        <div className="product-content__right">
          <h3>${data.discountPrice || data.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default Product;
