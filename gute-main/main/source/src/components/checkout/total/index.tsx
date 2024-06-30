import { calculateTotalPrice } from '@common/functions';
import GUButton from '@components/control/gu-button';
import CustomedCheckbox from '@components/other/customed-checkbox';
import { AppState } from '@store';
import { FormikProps } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';

export enum PaymentMethod {
  Payment,
  Paypal,
}

interface FormProps {
  paymentMethod: PaymentMethod;
}

const CheckoutFormTotal = (
  props: Pick<FormikProps<FormProps>, 'values' | 'handleChange' | 'handleSubmit' | 'setFieldValue' | 'handleSubmit'>,
) => {
  const { values, setFieldValue, handleSubmit } = props;

  const { data } = useSelector((state: AppState) => state.cart.list);

  return (
    <div className="checkout-total">
      <h3 className="checkout-title">Your order</h3>
      <table className="total__provisional">
        <colgroup>
          <col style={{ width: '70%' }} />
          <col style={{ width: '30%' }} />
        </colgroup>
        <thead>
          <tr>
            <th>Product</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr>
              <td>
                <span>{index + 1}.</span>
                <p>{item.name}</p>
              </td>
              <td>${item.discountPrice || item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="total__final">
        <colgroup>
          <col style={{ width: '70%' }} />
          <col style={{ width: '30%' }} />
        </colgroup>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>${calculateTotalPrice(data.map((item) => item.discountPrice || item.price))}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>${calculateTotalPrice(data.map((item) => item.discountPrice || item.price))}</td>
          </tr>
        </tbody>
      </table>
      <div className="total__payment-method">
        <div className="total__payment-method__block">
          <CustomedCheckbox
            value={values.paymentMethod === PaymentMethod.Payment}
            label="Cheque payment"
            onChange={() => setFieldValue('paymentMethod', PaymentMethod.Payment)}
          />
          {values.paymentMethod === PaymentMethod.Payment && (
            <p className="payment__content">
              Create am acount by entering the inform ation below. If you are a returing customer login at the top of
              the page.
            </p>
          )}
        </div>
        <div className="total__payment-method__block">
          <CustomedCheckbox
            value={values.paymentMethod === PaymentMethod.Paypal}
            label="Paypal"
            onChange={() => setFieldValue('paymentMethod', PaymentMethod.Paypal)}
          />
          {values.paymentMethod === PaymentMethod.Paypal && (
            <p className="payment__content">
              Create am acount by entering the inform ation below. If you are a returing customer login at the top of
              the page.
            </p>
          )}
        </div>
        <GUButton onClick={handleSubmit} shape="round" variant="contained" color="primary">
          Place order
        </GUButton>
      </div>
    </div>
  );
};

export default CheckoutFormTotal;
