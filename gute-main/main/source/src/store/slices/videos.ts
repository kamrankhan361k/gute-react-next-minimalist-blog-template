import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QueryParams, ResponseState, ResponseStateDetail } from '@store/shared';

interface VideoItem {
  id: number;
  title: string;
  url: string;
  duration: 212;
  thumbnail: string;
}

interface VideosState {
  list: ResponseState<VideoItem>;
}

const initialState: VideosState = {
  list: {
    fetching: false,
    data: [],
  },
};

const getVideosListRequest: CaseReducer<VideosState, PayloadAction<QueryParams>> = (state) => {
  delete state.list.error;
  state.list.fetching = true;
};

const getVideosListSuccess: CaseReducer<VideosState, PayloadAction<ResponseState<VideoItem>>> = (
  state,
  { payload },
) => {
  state.list.data = payload.data;
  state.list.fetching = false;
  state.list.meta = payload.meta;
};

const getVideosListFailed: CaseReducer<VideosState, PayloadAction<string>> = (state, { payload }) => {
  state.list.fetching = false;
  state.list.error = payload;
};

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    getVideosListRequest,
    getVideosListSuccess,
    getVideosListFailed,
  },
});

export const videoActions = videosSlice.actions;
export const videoReducer = videosSlice.reducer;
