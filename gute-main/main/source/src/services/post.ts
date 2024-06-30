import ConnectionInstance from './connection-instance';
import { GetPostCategoriesParams, GetPostListMaronryParams, GetPostListParams } from '@store/slices/posts';

export const getPosts = (params?: GetPostListParams) => ConnectionInstance.get('posts', { params });

export const getMasonryPosts = (params?: GetPostListMaronryParams) =>
  ConnectionInstance.get('posts-masonry', { params });

export const getMasonryWidePosts = (params?: GetPostListMaronryParams) =>
  ConnectionInstance.get('posts-masonry-wide', { params });

export const getPostCategories = (params?: GetPostCategoriesParams) =>
  ConnectionInstance.get('post-categories', { params });

export const getPostDetail = (id: number) => ConnectionInstance.get('posts/' + id);
