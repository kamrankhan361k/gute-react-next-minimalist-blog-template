import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QueryParams, ResponseState, ResponseStateDetail } from '@store/shared';
import { AuthorItem } from './author';

export enum PostCoverType {
  IMAGE = 'image',
  AUDIO = 'audio',
  VIDEO = 'video',
  SLIDE = 'slide',
  SPLIT = 'split',
}

export interface UserItem {
  id?: number;
  name: string;
  avatar: string | null;
}
export interface PostCommentItem {
  id: 1;
  publicDate: Date;
  favourite: number;
  shared: number;
  content: string;
  user: UserItem;
  replies: Omit<PostCommentItem, 'replies'>[];
}

export interface PostTagItem {
  id: number;
  name: string;
}
export interface PostItem {
  id?: number;
  image?: string | string[];
  category: PostItemCategory;
  title?: string;
  publicDate?: Date;
  commentsCount?: number;
  quote?: string;
  author?: string;
  audio?: string;
  video?: string;
  description?: string;
  type?: PostCoverType;
  comments?: PostCommentItem[];
  tags?: PostTagItem[];
  user: AuthorItem;
}

export interface PostItemCategory {
  id: number;
  image: string;
  name: string;
  key: string;
  quantity: number;
}

export enum PostCategoriesType {
  Bar = 'bar',
}
export interface GetPostCategoriesParams extends QueryParams {}

export interface GetPostListParams extends QueryParams {
  type_like?: string;
  isTrending_like?: boolean;
  'category.id_like'?: number | string | null;
}

export interface GetPostListMaronryParams extends GetPostListParams {
  isWide?: boolean;
}

interface PostsState {
  list: ResponseState<PostItem>;
  related: ResponseState<PostItem>;
  destination: ResponseState<PostItem>;
  guide: ResponseState<PostItem>;
  lastest: ResponseState<PostItem>;
  trendingList: ResponseState<PostItem>;
  detail: ResponseStateDetail<PostItem>;
  footerList: ResponseState<PostItem>;
  categories: ResponseState<PostItemCategory>;
}

const initialState: PostsState = {
  list: { fetching: false, data: [] },
  related: { fetching: false, data: [] },
  destination: { fetching: false, data: [] },
  guide: { fetching: false, data: [] },
  lastest: { fetching: false, data: [] },
  trendingList: { fetching: false, data: [] },
  detail: { fetching: false },
  footerList: { fetching: false, data: [] },
  categories: { fetching: false, data: [] },
};

const getPostsListRequest: CaseReducer<PostsState, PayloadAction<GetPostListParams>> = (state, { payload }) => {
  if (payload.loadingMore) {
    state.list.loadingMore = true;
    return;
  }
  state.list.fetching = true;
  delete state.list.error;
};

const getPostsListSuccess: CaseReducer<PostsState, PayloadAction<ResponseState<PostItem>>> = (state, { payload }) => {
  if (state.list.loadingMore) {
    state.list.data = [...state.list.data, ...payload.data];
    state.list.loadingMore = false;
  } else {
    state.list.data = payload.data;
    state.list.fetching = false;
  }
  state.list.meta = payload.meta;
};

const getPostsListFailed: CaseReducer<PostsState, PayloadAction<string>> = (state, { payload }) => {
  state.list.loadingMore = false;
  state.list.fetching = false;
  state.list.error = payload;
};

const getFooterPostsRequest: CaseReducer<PostsState, PayloadAction<GetPostListParams>> = (state) => {
  delete state.footerList.error;
  state.footerList.fetching = true;
};

const getFooterPostsSuccess: CaseReducer<PostsState, PayloadAction<ResponseState<PostItem>>> = (state, { payload }) => {
  state.footerList.data = payload.data;
  state.footerList.fetching = false;
  state.footerList.meta = payload.meta;
};

const getFooterPostsFailed: CaseReducer<PostsState, PayloadAction<string>> = (state, { payload }) => {
  state.footerList.fetching = false;
  state.footerList.error = payload;
};

const getPostDetailRequest: CaseReducer<PostsState> = (state) => {
  state.detail.fetching = true;
};

const getPostDetailSuccess: CaseReducer<PostsState, PayloadAction<PostItem>> = (state, { payload }) => {
  state.detail.fetching = false;
  state.detail.data = payload;
};

const getPostDetailFailed: CaseReducer<PostsState, PayloadAction<string>> = (state, { payload }) => {
  state.detail.fetching = false;
  state.detail.error = payload;
};

const getPostCategoriesRequest: CaseReducer<PostsState> = (state) => {
  delete state.categories.error;
  state.categories.fetching = true;
};

const getPostCategoriesSuccess: CaseReducer<PostsState, PayloadAction<ResponseState<PostItemCategory>>> = (
  state,
  { payload },
) => {
  state.categories.data = payload.data;
  state.categories.fetching = false;
};

const getPostCategoriesFailed: CaseReducer<PostsState, PayloadAction<string>> = (state, { payload }) => {
  state.categories.fetching = false;
  state.categories.error = payload;
};

const getTrendingPostsRequest: CaseReducer<PostsState> = (state) => {
  delete state.trendingList.error;
  state.trendingList.fetching = true;
};

const getTrendingPostsSuccess: CaseReducer<PostsState, PayloadAction<ResponseState<PostItem>>> = (
  state,
  { payload },
) => {
  state.trendingList.data = payload.data;
  state.trendingList.fetching = false;
};

const getTrendingPostsFailed: CaseReducer<PostsState, PayloadAction<string>> = (state, { payload }) => {
  state.trendingList.fetching = false;
  state.trendingList.error = payload;
};

const getDestinationPostsRequest: CaseReducer<PostsState> = (state) => {
  delete state.destination.error;
  state.destination.fetching = true;
};

const getDestinationPostsSuccess: CaseReducer<PostsState, PayloadAction<ResponseState<PostItem>>> = (
  state,
  { payload },
) => {
  state.destination.data = payload.data;
  state.destination.fetching = false;
  state.destination.meta = payload.meta;
};

const getDestinationPostsFailed: CaseReducer<PostsState, PayloadAction<string>> = (state, { payload }) => {
  state.destination.fetching = false;
  state.destination.error = payload;
};

const getGuidePostsRequest: CaseReducer<PostsState> = (state) => {
  delete state.guide.error;
  state.guide.fetching = true;
};

const getGuidePostsSuccess: CaseReducer<PostsState, PayloadAction<ResponseState<PostItem>>> = (state, { payload }) => {
  state.guide.data = payload.data;
  state.guide.fetching = false;
  state.guide.meta = payload.meta;
};

const getGuidePostsFailed: CaseReducer<PostsState, PayloadAction<string>> = (state, { payload }) => {
  state.guide.fetching = false;
  state.guide.error = payload;
};

const getLastestPostsRequest: CaseReducer<PostsState> = (state) => {
  delete state.lastest.error;
  state.lastest.fetching = true;
};

const getLastestPostsSuccess: CaseReducer<PostsState, PayloadAction<ResponseState<PostItem>>> = (
  state,
  { payload },
) => {
  state.lastest.data = payload.data;
  state.lastest.fetching = false;
  state.lastest.meta = payload.meta;
};

const getLastestPostsFailed: CaseReducer<PostsState, PayloadAction<string>> = (state, { payload }) => {
  state.lastest.fetching = false;
  state.lastest.error = payload;
};

const getRelatedPostsRequest: CaseReducer<PostsState> = (state) => {
  delete state.related.error;
  state.related.fetching = true;
};

const getRelatedPostsSuccess: CaseReducer<PostsState, PayloadAction<ResponseState<PostItem>>> = (
  state,
  { payload },
) => {
  state.related.data = payload.data;
  state.related.fetching = false;
  state.related.meta = payload.meta;
};

const getRelatedtPostsFailed: CaseReducer<PostsState, PayloadAction<string>> = (state, { payload }) => {
  state.related.fetching = false;
  state.related.error = payload;
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsListRequest,
    getPostsListSuccess,
    getPostsListFailed,

    getPostDetailRequest,
    getPostDetailSuccess,
    getPostDetailFailed,

    getFooterPostsRequest,
    getFooterPostsSuccess,
    getFooterPostsFailed,

    getPostCategoriesRequest,
    getPostCategoriesSuccess,
    getPostCategoriesFailed,

    getTrendingPostsRequest,
    getTrendingPostsSuccess,
    getTrendingPostsFailed,

    getDestinationPostsRequest,
    getDestinationPostsSuccess,
    getDestinationPostsFailed,

    getGuidePostsRequest,
    getGuidePostsSuccess,
    getGuidePostsFailed,

    getLastestPostsRequest,
    getLastestPostsSuccess,
    getLastestPostsFailed,

    getRelatedPostsRequest,
    getRelatedPostsSuccess,
    getRelatedtPostsFailed,
  },
});

export const postActions = postsSlice.actions;
export const postReducer = postsSlice.reducer;
