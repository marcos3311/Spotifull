import { createSlice } from '@reduxjs/toolkit';
import { fetchName } from './fetchName';

const initialState = {
    results: [],
};

const trackResultsSlice = createSlice({
    name: 'trackResults',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchName.fulfilled, (state, action) => {
                state.results = action.payload;
                state.isLoadingFetch = false;
                state.isFetchError = false;
            })
            .addCase(fetchName.pending, (state) => {
                state.isLoadingFetch = true;
                state.isFetchError = false;
            })
            .addCase(fetchName.rejected, (state) => {
                state.isLoadingFetch = false;
                state.isFetchError = true;
            });
    },
});

export const selectResults = state => state.trackResults.results;
export default trackResultsSlice.reducer;