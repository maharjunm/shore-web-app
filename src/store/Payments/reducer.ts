import {
  createSlice,
  // createSelector,
  PayloadAction,
  // createAsyncThunk
} from '@reduxjs/toolkit';

export type PaymentStatus = {
    status?: boolean;
};

export const initialPaymentStatus: PaymentStatus = {
  status: false,
};

const payment = createSlice({
  name: 'Payment',
  initialState: initialPaymentStatus,
  reducers: {
    statusChanged: (state, action: PayloadAction<boolean>) => {
      state.status = action.payload;
    },
  },
});

const { reducer } = payment;

export const { statusChanged } = payment.actions;

export default reducer;
