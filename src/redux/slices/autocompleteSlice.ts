import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';

interface AutocompleteState {
  suggestions: string[];
  loading: boolean;
}

const initialState: AutocompleteState = {
  suggestions: [],
  loading: false,
};

const autocompleteSlice = createSlice({
  name: 'autocomplete',
  initialState,
  reducers: {
    setSuggestions: (state, action: PayloadAction<string[]>) => {
      state.suggestions = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setSuggestions, setLoading } = autocompleteSlice.actions;

export const fetchSuggestions = (query: string): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch(`/api/autocomplete?q=${query}`);
    const data = await response.json();
    dispatch(setSuggestions(data));
  } catch (error) {
    dispatch(setSuggestions([]));
  }
};

export default autocompleteSlice.reducer;
