import { QueryParams } from '@store/shared';
import { GetProductsListParams } from '@store/slices/products';
import ConnectionInstance from './connection-instance';

export const getProducts = (params: GetProductsListParams) => ConnectionInstance.get('products', { params });

export const getProductDetail = (id: number) => ConnectionInstance.get('products/' + id);

export const deleteProduct = (id: number) => ConnectionInstance.delete('products/' + id);

export const getProductCategory = (params?: QueryParams) => ConnectionInstance.get('product-categories', { params });
