import Layout from '@components/layout';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';
import Instagram from '@components/sections/instagram';
import ShopLayout from '@components/shop';
import { handleGetCart } from '@store/thunk/cart';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const SectionContainer = styled.div`
  margin-bottom: ${60 / 14}rem;
`;

const Shop = () => {
  const dispatch = useDispatch();

  return (
    <Layout title="Shop">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem>Shop</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <SectionContainer>
        <ShopLayout />
      </SectionContainer>
      <Instagram />
    </Layout>
  );
};

export default Shop;
