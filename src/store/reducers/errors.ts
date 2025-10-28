import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ErrorEntry = {
  key: string;
  message: string;
  timestamp: number;
};

type ErrorsState = {
  map: Record<string, ErrorEntry | undefined>;
  lastError?: ErrorEntry;
};

const initialState: ErrorsState = {
  map: {},
  lastError: undefined,
};

const errorsSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<{ key: string; message: string }>) {
      const entry: ErrorEntry = {
        key: action.payload.key,
        message: action.payload.message,
        timestamp: Date.now(),
      };
      state.map[action.payload.key] = entry;
      state.lastError = entry;
    },
    clearError(state, action: PayloadAction<string>) {
      state.map[action.payload] = undefined;
      if (state.lastError?.key === action.payload) {
        state.lastError = undefined;
      }
    },
    resetErrors(state) {
      state.map = {};
      state.lastError = undefined;
    },
  },
});

export const errorsActions = errorsSlice.actions;
export default errorsSlice.reducer;