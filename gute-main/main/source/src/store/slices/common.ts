import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToastState {
  visible: boolean;
  message: string;
  type?: 'success' | 'error' | 'warn' | 'info';
}

interface CommonState {
  toast: ToastState;
}

const initialState: CommonState = { toast: { visible: false, message: 'Some message' } };

const showToast: CaseReducer<CommonState, PayloadAction<Omit<ToastState, 'visible'>>> = (state, { payload }) => {
  state.toast.visible = true;
  state.toast.message = payload.message;
  state.toast.type = payload.type;
};

const hideToast: CaseReducer<CommonState> = (state, action) => {
  state.toast.visible = false;
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    showToast,
    hideToast,
  },
});

export const commonActions = commonSlice.actions;
export const commonReducer = commonSlice.reducer;
