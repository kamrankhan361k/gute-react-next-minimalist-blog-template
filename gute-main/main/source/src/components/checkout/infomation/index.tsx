import CustomedCheckbox from '@components/other/customed-checkbox';
import { FormikProps } from 'formik';
import React from 'react';

interface FormProps {
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
}

const CheckoutFormInformation = (
  props: Pick<
    FormikProps<FormProps>,
    'values' | 'errors' | 'touched' | 'handleChange' | 'handleBlur' | 'setFieldValue' | 'handleSubmit'
  >,
) => {
  const { values, setFieldValue, handleSubmit, handleChange, handleBlur, errors, touched } = props;
  return (
    <div className="checkout-form">
      <h3 className="checkout-title">BILLING DETAIL</h3>
      <div className="row">
        <div className="col-12 col-sm-6">
          <div className="input-group">
            <label>First name</label>
            <input type="text" name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
            {!!errors.firstName && !!touched.firstName && <span className="error">{errors.firstName}</span>}
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <div className="input-group">
            <label>Last name</label>
            <input type="text" name="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur} />
            {!!errors.lastName && !!touched.lastName && <span className="error">{errors.lastName}</span>}
          </div>
        </div>
      </div>
      <div className="input-group">
        <label>First Country</label>
        <input type="text" name="country" value={values.country} onChange={handleChange} onBlur={handleBlur} />
        {!!errors.country && !!touched.country && <span className="error">{errors.country}</span>}
      </div>
      <div className="input-group">
        <label>Address</label>
        <div className="input-group">
          <input
            className="mb-20"
            type="text"
            name="street"
            placeholder="Street Address"
            value={values.street}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {!!errors.street && !!touched.street && <span className="error">{errors.street}</span>}
        </div>
        <input
          type="text"
          name="apartment"
          placeholder="Apartment. suite, unite ect ( optinal )"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className="input-group">
        <label>Town/City</label>
        <input type="text" name="city" value={values.city} onChange={handleChange} onBlur={handleBlur} />
        {!!errors.city && !!touched.city && <span className="error">{errors.city}</span>}
      </div>
      <div className="input-group">
        <label>Country/State</label>
        <input type="text" name="state" value={values.state} onChange={handleChange} onBlur={handleBlur} />
        {!!errors.state && !!touched.state && <span className="error">{errors.state}</span>}
      </div>
      <div className="input-group">
        <label>Postcode/ZIP</label>
        <input type="text" name="zip" value={values.zip} onChange={handleChange} onBlur={handleBlur} />
        {!!errors.zip && !!touched.zip && <span className="error">{errors.zip}</span>}
      </div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <div className="input-group">
            <label>Phone</label>
            <input type="text" name="phone" value={values.phone} onChange={handleChange} onBlur={handleBlur} />
            {!!errors.phone && !!touched.phone && <span className="error">{errors.phone}</span>}
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <div className="input-group">
            <label>Email</label>
            <input type="text" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
            {!!errors.email && !!touched.email && <span className="error">{errors.email}</span>}
          </div>
        </div>
      </div>
      <CustomedCheckbox
        label="Note about your order, e.g, special noe for delivery"
        value={values.hasNoted}
        onChange={(p) => setFieldValue('hasNoted', p)}
      />
      {!!values.hasNoted && (
        <div className="input-group">
          <label>Order notes</label>
          <input
            type="text"
            name="note"
            placeholder="Note about your order, e.g, special noe for delivery"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      )}
    </div>
  );
};

export default CheckoutFormInformation;
