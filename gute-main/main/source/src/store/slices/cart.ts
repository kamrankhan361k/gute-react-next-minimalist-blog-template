import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestStatus, ResponseState, ResponseStatus } from '@store/shared';
import { ProductItem } from '@store/slices/products';

export interface CartItem extends ProductItem {
  cartQuantity: number;
}

export interface AddToCartBody extends ProductItem {
  cartQuantity: number;
}

export interface UpdateCartQuantityBody {
  id: number | string;
  cartQuantity: number;
}

interface CartState {
  list: ResponseState<CartItem>;
  addToCart: ResponseStatus;
  removeFromCart: ResponseStatus;
  updateCartQuantity: ResponseStatus;
}

const initialState: CartState = {
  list: { fetching: false, data: [] },
  addToCart: { status: RequestStatus.Idle },
  removeFromCart: { status: RequestStatus.Idle },
  updateCartQuantity: { status: RequestStatus.Idle },
};

const getCartRequest: CaseReducer<CartState> = (state) => {
  delete state.list.error;
  state.list.fetching = true;
};

const getCartSuccess: CaseReducer<CartState, PayloadAction<ResponseState<CartItem>>> = (state, { payload }) => {
  state.list.data = payload.data;
  state.list.fetching = false;
};

const getCartFailed: CaseReducer<CartState, PayloadAction<string>> = (state, { payload }) => {
  state.list.error = payload;
  state.list.fetching = false;
};

const addToCartRequest: CaseReducer<CartState> = (state) => {
  delete state.addToCart.error;
  state.addToCart.status = RequestStatus.Loading;
};

const addToCartSuccess: CaseReducer<CartState> = (state) => {
  state.addToCart.status = RequestStatus.Success;
};

const addToCartFailed: CaseReducer<CartState, PayloadAction<string>> = (state, { payload }) => {
  state.addToCart.error = payload;
  state.addToCart.status = RequestStatus.Failed;
};

const removeFromCartRequest: CaseReducer<CartState> = (state) => {
  delete state.removeFromCart.error;
  state.removeFromCart.status = RequestStatus.Loading;
};

const removeFromCartSuccess: CaseReducer<CartState> = (state) => {
  state.removeFromCart.status = RequestStatus.Success;
};

const removeFromCartFailed: CaseReducer<CartState, PayloadAction<string>> = (state, { payload }) => {
  state.removeFromCart.error = payload;
  state.removeFromCart.status = RequestStatus.Failed;
};

const updateCartQuantityRequest: CaseReducer<CartState> = (state) => {
  delete state.updateCartQuantity.error;
  state.updateCartQuantity.status = RequestStatus.Loading;
};

const updateCartQuantitySuccess: CaseReducer<CartState> = (state) => {
  state.updateCartQuantity.status = RequestStatus.Success;
};

const updateCartQuantityFailed: CaseReducer<CartState, PayloadAction<string>> = (state, { payload }) => {
  state.updateCartQuantity.error = payload;
  state.updateCartQuantity.status = RequestStatus.Failed;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCartRequest,
    getCartSuccess,
    getCartFailed,

    addToCartRequest,
    addToCartSuccess,
    addToCartFailed,

    removeFromCartRequest,
    removeFromCartSuccess,
    removeFromCartFailed,

    updateCartQuantityRequest,
    updateCartQuantitySuccess,
    updateCartQuantityFailed,
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
