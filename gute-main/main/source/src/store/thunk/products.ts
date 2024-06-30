import { getProductDetail, getProducts } from '@services/products';
import { QueryParams } from '@store/shared';
import { GetProductsListParams, productActions } from '@store/slices/products';
import { Dispatch } from 'redux';
import { getProductCategory } from '@services/products';

export const handleGetProducts = (param: GetProductsListParams) => async (dispatch: Dispatch) => {
  try {
    dispatch(productActions.getProductsRequest(param));
    const data = await getProducts(param);
    dispatch(productActions.getProductsSuccess(data));
  } catch (error) {
    dispatch(productActions.getProductsFailed(error.message));
  }
};

export const handleGetRelatedProducts = (param: GetProductsListParams) => async (dispatch: Dispatch) => {
  try {
    dispatch(productActions.getRelatedProductsRequest());
    const data = await getProducts(param);
    dispatch(productActions.getRelatedProductsSuccess(data));
  } catch (error) {
    dispatch(productActions.getRelatedProductsFailed(error.message));
  }
};

export const handleGetProductCategories = (param?: QueryParams) => async (dispatch: Dispatch) => {
  try {
    dispatch(productActions.getProductCategoriesRequest());
    const data = await getProductCategory(param);
    dispatch(productActions.getProductCategoriesSuccess(data));
  } catch (error) {
    dispatch(productActions.getProductCategoriesFailed(error.message));
  }
};

export const handleGetProductDetail = (id: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(productActions.getProductDetailRequest());
    const { data } = await getProductDetail(id);
    dispatch(productActions.getProductDetailSuccess(data));
  } catch (error) {
    dispatch(productActions.getProductDetailFailed(error.message));
  }
};
