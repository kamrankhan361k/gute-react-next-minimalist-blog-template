import Product from '@components/product';
import { AppState } from '@store';
import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
  margin: 0 ${-15 / 16}rem;
`;

const SliderItem = styled.div`
  padding: 0 ${15 / 16}rem;
`;

const ProductDetailRelateProducts = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const { data, fetching } = useSelector((state: AppState) => state.product.related);

  return (
    <div className="product-detail-related">
      <h5 className="product-detail-related__title">Related products</h5>
      {!fetching && (
        <StyledSlider {...settings}>
          {data.map((item, index) => (
            <SliderItem key={index}>
              <Product data={item} />
            </SliderItem>
          ))}
        </StyledSlider>
      )}
    </div>
  );
};

export default ProductDetailRelateProducts;
