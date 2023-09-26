import { ActionReducerMapBuilder, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FiltersState } from '../Filters';
import { LoadingStages } from '../types';
import { fetchCapsules } from './actions';
import { CapsulesState } from './types';
import { applyFilter } from './utils';

const initialState: CapsulesState = {
  capsules: [],
  filteredCapsules: [],
  loading: LoadingStages.IDLE,
};

export const CapsulesSlice = createSlice({
  name: "Capsules",
  initialState,
  reducers: {
    filterCapsules: (state, action: PayloadAction<FiltersState>) => {
      state.filteredCapsules = applyFilter(state.capsules, action.payload);
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<CapsulesState>) => {
    builder.addCase(fetchCapsules.fulfilled, (state, action) => {
      state.capsules = action.payload.capsules;
      state.filteredCapsules = action.payload.capsules;
      state.loading = LoadingStages.SUCCEEDED;
    });
    builder.addCase(fetchCapsules.pending, (state) => {
      state.capsules = state.capsules ?? [];
      state.filteredCapsules = state.filteredCapsules ?? [];
      state.loading = LoadingStages.PENDING;
    });
    builder.addCase(fetchCapsules.rejected, (state) => {
      state.capsules = state.capsules ?? [];
      state.filteredCapsules = state.filteredCapsules ?? [];
      state.loading = LoadingStages.FAILED;
    });
  },
});

export const { filterCapsules } = CapsulesSlice.actions;
