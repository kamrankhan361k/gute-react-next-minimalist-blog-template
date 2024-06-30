import GUButton from '@components/control/gu-button';
import CustomedCheckbox from '@components/other/customed-checkbox';
import { AppState } from '@store';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as Yup from 'yup';

interface ShopSidebarProps {
  getSelectedCategoriesId?: (p: number[]) => void;
  onFilterPrice?: (val: FormProps) => void;
}

const ButtonContainer = styled.div`
  text-align: right;
`;

const FormSchema = Yup.object().shape({
  minPrice: Yup.number().lessThan(Yup.ref('maxPrice') as any, 'Min Price must be less than max price'),
  maxPrice: Yup.number().moreThan(Yup.ref('minPrice') as any, 'Max Price must be greater than min price'),
});

interface FormProps {
  minPrice: number;
  maxPrice: number;
}

const ShopSidebar = ({ getSelectedCategoriesId, onFilterPrice }: ShopSidebarProps) => {
  const dispatch = useDispatch();

  const [selectedCategoriesId, setSelectedCategoriesId] = useState<number[]>([]);

  const { data } = useSelector((state: AppState) => state.product.categories);

  useEffect(() => {
    getSelectedCategoriesId?.(selectedCategoriesId);
  }, [selectedCategoriesId]);

  const normalizeValue = (value: string) =>
    Number(
      value
        .split('')
        .filter((item) => '0123456789'.includes(item))
        .join(''),
    );
  return (
    <div className="shop-sidebar">
      <div className="shop-sidebar__section -price">
        <div className="center-line-title -medium">
          <h5>Price</h5>
        </div>
        <Formik
          initialValues={{ minPrice: 0, maxPrice: 0 }}
          onSubmit={(val: FormProps) => onFilterPrice?.(val)}
          validationSchema={FormSchema}>
          {({ values, errors, touched, setFieldValue, handleSubmit }) => {
            return (
              <>
                <form action="/">
                  <div className="range-input">
                    <label>$</label>
                    <input
                      name="minPrice"
                      value={values.minPrice || 0}
                      onChange={(e) => {
                        setFieldValue('minPrice', normalizeValue(e.target.value));
                      }}
                      type="text"
                    />
                  </div>
                  <span>
                    <i className="far fa-angle-double-right"></i>
                  </span>
                  <div className="range-input">
                    <label>$</label>
                    <input
                      name="maxPrice"
                      value={values.maxPrice || 0}
                      onChange={(e) => setFieldValue('maxPrice', normalizeValue(e.target.value))}
                      type="text"
                    />
                  </div>
                </form>
                {errors.minPrice && touched.minPrice && <span className="error">{errors.minPrice}</span>}
                {errors.minPrice && touched.maxPrice && <span className="error">{errors.maxPrice}</span>}
                <ButtonContainer>
                  <GUButton onClick={handleSubmit} variant="contained" size="small" color="primary">
                    Search
                  </GUButton>
                </ButtonContainer>
              </>
            );
          }}
        </Formik>
      </div>
      <div className="shop-sidebar__section -color">
        <div className="center-line-title -medium">
          <h5>Categories</h5>
        </div>
        {data.map((item) => (
          <CustomedCheckbox
            label={item.name}
            onChange={(checked) => {
              const idIndex = selectedCategoriesId.indexOf(item.id);
              idIndex === -1
                ? setSelectedCategoriesId([...selectedCategoriesId, item.id])
                : setSelectedCategoriesId([
                    ...selectedCategoriesId.slice(0, idIndex),
                    ...selectedCategoriesId.slice(idIndex + 1),
                  ]);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopSidebar;
