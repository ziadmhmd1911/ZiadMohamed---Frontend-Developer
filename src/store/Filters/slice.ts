import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DateRange, FilterOption, Filters, FiltersState, PayLoad } from './types';

const initialState: FiltersState = {
  [Filters.STATUS]: [],
  [Filters.DATE_RANGE]: {
    startDate: null,
    endDate: null,
  },
  [Filters.TYPE]: [],
};

export const FiltersSlice = createSlice({
  name: "Filters",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<PayLoad>) => {
      if (action.payload.filterType === Filters.DATE_RANGE) {
        state[action.payload.filterType] = {
          ...(action.payload.filterOptions as DateRange),
        };
      } else {
        state[action.payload.filterType] = [
          ...(action.payload.filterOptions as FilterOption[]),
        ];
      }
    },
    clearAllFilters: (state) => {
      state = initialState;
    },
  },
});

export const { setFilters, clearAllFilters } = FiltersSlice.actions;
