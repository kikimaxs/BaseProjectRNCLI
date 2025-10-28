import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AppState = {
  initialized: boolean;
  booted: boolean;
  loading: boolean;
  error: string | null;
};

const initialState: AppState = {
  initialized: true,
  booted: false,
  loading: false,
  error: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    appBoot(state) {
      state.loading = true;
      state.error = null;
    },
    appBootSuccess(state) {
      state.loading = false;
      state.booted = true;
    },
    appBootFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
export default appSlice.reducer;