import CheckoutForm, { CheckoutFormProps } from '@components/checkout';
import Layout from '@components/layout';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';
import Instagram from '@components/sections/instagram';
import { handleGetCart } from '@store/thunk/cart';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Checkout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetCart());
  }, []);

  const handleFormSubmit = (val: CheckoutFormProps) => {
    console.log(val);
  };

  return (
    <Layout title="Checkout">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
            Home
          </BreadcrumbItem>
          <BreadcrumbItem>Checkout</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <CheckoutForm handleFormSubmit={handleFormSubmit} />
      <Instagram />
    </Layout>
  );
};

export default Checkout;
