import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QueryParams, ResponseState, ResponseStateDetail } from '@store/shared';
import { UserItem } from './posts';

export interface ProductCategoryItem {
  id: number;
  name: string;
}

export interface ProductReviewItem {
  id: 1;
  publicDate: Date;
  rate: number;
  content: string;
  user: UserItem;
}

export interface ProductItem {
  id: number | string;
  name: string;
  brand: string;
  rate: number;
  price: number;
  discountPrice: number;
  description?: string;
  quantity?: number;
  cover: string;
  images: string[];
  tags?: { id: number; name: string }[];
  categories: ProductCategoryItem;
  reviews: ProductReviewItem[];
  sku: string;
}

export interface GetProductsListParams extends QueryParams {
  'categories.id_like'?: string | null;
  price_gte?: number | null;
  price_lte?: number | null;
}

interface ProductState {
  list: ResponseState<ProductItem>;
  related: ResponseState<ProductItem>;
  categories: ResponseState<ProductCategoryItem>;
  detail: ResponseStateDetail<ProductItem>;
}

const initialState: ProductState = {
  list: { fetching: false, data: [] },
  related: { fetching: false, data: [] },
  categories: { fetching: false, data: [] },
  detail: { fetching: false },
};

const getProductsRequest: CaseReducer<ProductState, PayloadAction<GetProductsListParams>> = (state, { payload }) => {
  if (payload.loadingMore) {
    state.list.loadingMore = true;
    return;
  }
  state.list.fetching = true;
  delete state.list.error;
};

const getProductsSuccess: CaseReducer<ProductState, PayloadAction<ResponseState<ProductItem>>> = (
  state,
  { payload },
) => {
  if (state.list.loadingMore) {
    state.list.data = [...state.list.data, ...payload.data];
    state.list.loadingMore = false;
  } else {
    state.list.data = payload.data;
    state.list.fetching = false;
  }
  state.list.meta = payload.meta;
};

const getProductsFailed: CaseReducer<ProductState, PayloadAction<string>> = (state, { payload }) => {
  state.list.loadingMore = false;
  state.list.fetching = false;
  state.list.error = payload;
};

const getRelatedProductsRequest: CaseReducer<ProductState> = (state) => {
  state.related.fetching = true;
  delete state.related.error;
};

const getRelatedProductsSuccess: CaseReducer<ProductState, PayloadAction<ResponseState<ProductItem>>> = (
  state,
  { payload },
) => {
  state.related.data = payload.data;
  state.related.fetching = false;
  state.related.meta = payload.meta;
};

const getRelatedProductsFailed: CaseReducer<ProductState, PayloadAction<string>> = (state, { payload }) => {
  state.related.fetching = false;
  state.related.error = payload;
};

const getProductCategoriesRequest: CaseReducer<ProductState> = (state) => {
  delete state.categories.error;
  state.categories.fetching = true;
};

const getProductCategoriesSuccess: CaseReducer<ProductState, PayloadAction<ResponseState<ProductCategoryItem>>> = (
  state,
  { payload },
) => {
  state.categories.data = payload.data;
  state.categories.meta = payload.meta;
  state.categories.fetching = false;
};

const getProductCategoriesFailed: CaseReducer<ProductState, PayloadAction<string>> = (state, { payload }) => {
  state.categories.error = payload;
  state.categories.fetching = false;
};

const getProductDetailRequest: CaseReducer<ProductState> = (state) => {
  delete state.detail.error;
  state.detail.fetching = true;
};

const getProductDetailSuccess: CaseReducer<ProductState, PayloadAction<ProductItem>> = (state, { payload }) => {
  state.detail.fetching = false;
  state.detail.data = payload;
};

const getProductDetailFailed: CaseReducer<ProductState, PayloadAction<string>> = (state, { payload }) => {
  delete state.detail.error;
  state.detail.fetching = true;
  state.detail.error = payload;
};

const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProductsRequest,
    getProductsSuccess,
    getProductsFailed,

    getProductCategoriesRequest,
    getProductCategoriesSuccess,
    getProductCategoriesFailed,

    getProductDetailRequest,
    getProductDetailSuccess,
    getProductDetailFailed,

    getRelatedProductsRequest,
    getRelatedProductsSuccess,
    getRelatedProductsFailed,
  },
});

export const productActions = productsSlice.actions;
export const productReducer = productsSlice.reducer;
