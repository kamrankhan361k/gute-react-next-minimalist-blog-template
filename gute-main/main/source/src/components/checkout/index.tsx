import { handleGetCart } from '@store/thunk/cart';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import CheckoutFormInformation from './infomation';
import CheckoutFormTotal, { PaymentMethod } from './total';

const FormSchema = Yup.object({
  firstName: Yup.string().required('Please enter your first name'),
  lastName: Yup.string().required('Please enter your last name'),
  country: Yup.string().required('Please enter your country name'),
  street: Yup.string().required('Please enter your street address'),
  city: Yup.string().required('Please enter your city'),
  state: Yup.string().required('Please enter your state'),
  zip: Yup.string().required('Please enter your postcode/zip'),
  phone: Yup.string().required('Please enter your phone number'),
  email: Yup.string().email('Please enter a valid email').required('Please enter your email'),
});

export interface CheckoutFormProps {
  firstName: string;
  lastName: string;
  country: string;
  street: string;
  apartment?: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  hasNoted: boolean;
  note: string;
  paymentMethod: PaymentMethod;
}

interface CheckoutForm {
  handleFormSubmit: (val: CheckoutFormProps) => void;
}

const CheckoutForm = ({ handleFormSubmit }: CheckoutForm) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetCart());
  }, []);

  const initialValues = {
    firstName: '',
    lastName: '',
    country: '',
    street: '',
    apartment: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    hasNoted: false,
    note: '',
    paymentMethod: PaymentMethod.Payment,
  };

  return (
    <div className="checkout">
      <div className="container">
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit} validationSchema={FormSchema}>
          {(formProps) => {
            const { values, setFieldValue, handleSubmit, handleChange, handleBlur, errors, touched } = formProps;
            return (
              <div className="row">
                <div className="col-12 col-md-7 col-lg-8">
                  <CheckoutFormInformation {...formProps} />
                </div>
                <div className="col-12 col-md-5 col-lg-4">
                  <CheckoutFormTotal {...formProps} />
                </div>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default CheckoutForm;
