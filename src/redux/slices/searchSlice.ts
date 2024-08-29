import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
// import { resultstype } 

interface SearchState {
  results: any;
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  results: [],
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setResults: (state, action: PayloadAction<any[]>) => {
      state.results = action.payload;
      state.loading = false;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setLoading, setResults, setError } = searchSlice.actions;

export const fetchSearchResults = (query: string): AppThunk => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await fetch(`/api/search/?q=${query}`);
    if (!response.ok) {
      throw new Error("Failed to fetch search results");
    }
    const data = await response.json();
    dispatch(setResults(data));
  } catch (error: any) {
    dispatch(setError(error.message));
  }
};

export default searchSlice.reducer;
