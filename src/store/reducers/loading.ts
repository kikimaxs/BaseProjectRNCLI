import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LoadingState = {
  map: Record<string, boolean>;
};

const initialState: LoadingState = {
  map: {},
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading(state, action: PayloadAction<string>) {
      state.map[action.payload] = true;
    },
    stopLoading(state, action: PayloadAction<string>) {
      state.map[action.payload] = false;
    },
    resetLoading(state) {
      state.map = {};
    },
  },
});

export const loadingActions = loadingSlice.actions;
export default loadingSlice.reducer;