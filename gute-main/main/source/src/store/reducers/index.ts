import { combineReducers } from 'redux';
import { commonReducer } from '@store/slices/common';
import { postReducer } from '@store/slices/posts';
import { videoReducer } from '@store/slices/videos';
import { authorReducer } from '@store/slices/author';
import { productReducer } from '@store/slices/products';
import { cartReducer } from '@store/slices/cart';

const rootReducer = combineReducers({
  common: commonReducer,
  posts: postReducer,
  video: videoReducer,
  author: authorReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
