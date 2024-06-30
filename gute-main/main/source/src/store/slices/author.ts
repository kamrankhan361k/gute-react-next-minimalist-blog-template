import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseState, ResponseStateDetail } from '@store/shared';
import { PostItem } from './posts';

export interface AuthorItem {
  id: number;
  avatar?: string;
  fullName: string;
  nickName?: string;
  email: string;
  gender: 'Non-binary';
  bio?: 'streamline best-of-breed e-markets';
}

interface AuthorState {
  detail: ResponseStateDetail<AuthorItem>;
  posts: ResponseState<PostItem>;
}

const initialState: AuthorState = {
  detail: { fetching: false },
  posts: { fetching: false, data: [] },
};

const getAuthorDetailRequest: CaseReducer<AuthorState> = (state) => {
  delete state.detail.error;
  state.detail.fetching = true;
};

const getAuthorDetailSuccess: CaseReducer<AuthorState, PayloadAction<AuthorItem>> = (state, { payload }) => {
  state.detail.data = payload;
  state.detail.fetching = false;
};

const getAuthorDetailFailed: CaseReducer<AuthorState, PayloadAction<string>> = (state, { payload }) => {
  state.detail.error = payload;
  state.detail.fetching = false;
};

const getAuthorPostsRequest: CaseReducer<AuthorState> = (state) => {
  delete state.posts.error;
  state.posts.fetching = true;
};

const getAuthorPostsSuccess: CaseReducer<AuthorState, PayloadAction<ResponseState<PostItem>>> = (
  state,
  { payload },
) => {
  state.posts.data = payload.data;
  state.posts.meta = payload.meta;
  state.posts.fetching = false;
};

const getAuthorPostsFailed: CaseReducer<AuthorState, PayloadAction<string>> = (state, { payload }) => {
  state.posts.error = payload;
  state.posts.fetching = false;
};

const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {
    getAuthorDetailRequest,
    getAuthorDetailSuccess,
    getAuthorDetailFailed,

    getAuthorPostsRequest,
    getAuthorPostsSuccess,
    getAuthorPostsFailed,
  },
});

export const authorActions = authorSlice.actions;
export const authorReducer = authorSlice.reducer;
