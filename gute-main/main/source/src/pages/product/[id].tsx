import Layout from '@components/layout';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';
import ProductDetailContent from '@components/product-detail/content';
import ProductDetailRelateProducts from '@components/product-detail/relate-products';
import ProductDetailSlide from '@components/product-detail/slide';
import ProductDetailTab from '@components/product-detail/tab';
import { AppState } from '@store';
import { handleGetCart } from '@store/thunk/cart';
import { handleGetProductDetail, handleGetRelatedProducts } from '@store/thunk/products';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetai = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const id = Number(router.query.id);

  const { data } = useSelector((state: AppState) => state.product.detail);

  useEffect(() => {
    if (id) {
      dispatch(handleGetProductDetail(id));
      dispatch(handleGetRelatedProducts({ _limit: 4 }));
    }
  }, [id]);

  return (
    <Layout title={data?.name}>
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem>Product</BreadcrumbItem>
          <BreadcrumbItem>{data?.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">
          <div className="col-12 col-md-6">
            <ProductDetailSlide />
          </div>
          <div className="col-12 col-md-6">
            <ProductDetailContent />
          </div>
        </div>
        <ProductDetailTab />
        <ProductDetailRelateProducts />
      </div>
    </Layout>
  );
};

export default ProductDetai;
