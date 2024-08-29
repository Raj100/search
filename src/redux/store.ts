'use client';

import { configureStore, combineReducers, Action, ThunkAction } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import autocompleteReducer from './slices/autocompleteSlice';
import searchReducer from './slices/searchSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  autocomplete: autocompleteReducer,
  search: searchReducer,
});

export const store = configureStore({
  reducer: rootReducer,

});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
