import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { CapsulesSlice } from './Capsules';
import { FiltersSlice } from './Filters';

const reducer = combineReducers({
  capsules: CapsulesSlice.reducer,
  filters: FiltersSlice.reducer,
});

export const store = configureStore({
  reducer,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
