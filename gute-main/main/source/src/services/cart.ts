import { QueryParams } from '@store/shared';
import { AddToCartBody, CartItem, UpdateCartQuantityBody } from '@store/slices/cart';
import { ProductItem } from '@store/slices/products';
import ConnectionInstance from './connection-instance';

export const getCarts = (params?: QueryParams) => ConnectionInstance.get('cart', { params });

export const addToCart = (product: CartItem) => ConnectionInstance.post('cart', product);

export const updateCartQuantity = ({ id, ...data }: UpdateCartQuantityBody) =>
  ConnectionInstance.patch('cart/' + id, data);

export const removeFromCart = (id: number | string) => ConnectionInstance.delete('cart/' + id);
