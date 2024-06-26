import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../store';
import { createSelector } from 'reselect';
import { SearchCriteria, SearchState } from '../../types/index';

const initialState: SearchState = {
  criteria: {
    city: '',
    startDate: '',
    endDate: '',
    guests: 1,
  },
  results: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    performSearch: (state, action: PayloadAction<SearchCriteria>) => {
      state.criteria = action.payload;
    },
    setResults: (state, action: PayloadAction<string[]>) => {
      state.results = action.payload;
    },
  },
});

export const { performSearch, setResults } = searchSlice.actions;
export default searchSlice.reducer;

export const selectFilteredHotels = createSelector(
  (state: RootState) => state.search.results,
  (state: RootState) => state.hotels.allHotels,
  (results, allHotels) =>
    results.length === 0
      ? allHotels.filter((hotel) => hotel.status === 'active')
      : results
          .map((id) => allHotels.find((hotel) => hotel.id === id))
          .filter((hotel) => hotel?.status === 'active')
);
