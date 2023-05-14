import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { SearchData } from '../../components/DataModels/SearchData';

export type SearchStatus = {
  jobTitle?: string,
  location?: string,
  salary?: number,
  discipline?: any,
  country?: any,
  sector?: any,
}
export const initialSearch: SearchStatus = {
  jobTitle: '',
  location: '',
  salary: 0,
  discipline: null,
  country: null,
  sector: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initialSearch,
  reducers: {
    updateSearch: (state, action: PayloadAction<SearchData>) => {
      console.log('payload', action.payload);
      state = action.payload;
      console.log('state',state);
    },
  },
});

const { reducer } = searchSlice;

export const { updateSearch } = searchSlice.actions;

export default reducer;
