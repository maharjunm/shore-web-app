import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../configureStore';

export const selectStatus = createSelector(
  (state: RootState) => state.Payment.status,
  (status) => status
);
