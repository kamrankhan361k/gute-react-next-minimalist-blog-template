import { Formik, FormikConfig } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import GUButton from '@components/control/gu-button';
import styled from 'styled-components';
import { ThemeVariation } from '@common/enum';
import classNames from 'classnames';
import { renderThemeClass } from '@common/functions';

const FormSchema = Yup.object().shape({
  email: Yup.string().email('Please type validate email format').required('Please provide an email'),
});

export interface SubcribeCardFormProps {
  email: string;
}

const StyledGUButton = styled(GUButton)`
  text-transform: uppercase;
`;

const SubcribeCard = ({
  theme,
  colored,
  ...props
}: Omit<FormikConfig<SubcribeCardFormProps>, 'initialValues' | 'validationSchema'> & {
  theme?: ThemeVariation;
  colored?: boolean;
}) => {
  return (
    <Formik validationSchema={FormSchema} initialValues={{ email: '' }} {...props}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <form
          className={classNames('subcribe-card', renderThemeClass(theme), { '-colored': colored })}
          onSubmit={handleSubmit}>
          <h5>Subcribe</h5>
          <p>Lorem ipsum dolor amet, consectetur adipiscing elit, sed tempor.</p>
          <div className="input-group">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Enter your email"
            />
            {errors.email && touched.email && <span>{errors.email}</span>}
          </div>
          <StyledGUButton
            weight="medium"
            buttonType="submit"
            variant="contained"
            color={theme}
            shape="round"
            size="small"
            fullwidth>
            Subcribe
          </StyledGUButton>
        </form>
      )}
    </Formik>
  );
};

export default SubcribeCard;
