import GUButton from '@components/control/gu-button';
import QuantityController from '@components/control/quantity-controller';
import { AppState } from '@store';
import { RequestStatus } from '@store/shared';
import { handleAddToCart } from '@store/thunk/cart';
import { times } from 'lodash';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetailContent = () => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const { data } = useSelector((state: AppState) => state.product.detail);
  const { data: cartData } = useSelector((state: AppState) => state.cart.list);
  const { status } = useSelector((state: AppState) => state.cart.addToCart);

  return (
    <div className="product-detail-content">
      <div className="product-detail-content__top">
        <h1>{data?.name}</h1>
        <p className="brand">{data?.brand}</p>
        <div className="rate">
          <div className="star">
            {times(data?.rate || 0, () => (
              <i className="fas fa-star"></i>
            ))}
          </div>
          <span>({data?.reviews?.length || 0} reviews)</span>
        </div>
        <div className="price">
          <h3>$ 75.0</h3>
          <span className="discount">$ 83.0</span>
        </div>
        <p className="description">
          Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur magni lores eos qui
          ratione voluptatem sequi nesciunt.
        </p>
        <div className="product-controller">
          <div className="quantity">
            <span>Quantity:</span>
            <QuantityController onChange={setQuantity} />
          </div>
          <GUButton
            preffix={status == RequestStatus.Loading && <i className="fal fa-spinner-third fa-spin" />}
            disabled={status == RequestStatus.Loading || !!cartData.find((item) => item.id === data?.id)}
            onClick={() =>
              data &&
              !cartData.find((item) => item.id === data?.id) &&
              dispatch(handleAddToCart({ ...data, cartQuantity: quantity }))
            }
            variant="contained"
            shape="round">
            Add to cart
          </GUButton>
        </div>
      </div>
      <div className="product-detail-content__bottom">
        <div className="type-block">
          <p className="type-name">Sku</p>
          <p className="type-detail">{data?.sku}</p>
        </div>
        <div className="type-block">
          <p className="type-name">Categories</p>
          <p className="type-detail">{data?.categories.name}</p>
        </div>
        <div className="type-block">
          <p className="type-name">Promotions:</p>
          <p className="type-detail">Free shipping</p>
        </div>
        <div className="type-block">
          <p className="type-name">Tags:</p>
          <p className="type-detail">{data?.tags?.map((item) => '#' + item.name).join(',')}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailContent;
