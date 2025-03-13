import { createSlice } from '@reduxjs/toolkit';
import { fetchName } from './fetchName';

const initialState = {
    results: [],
    inputValue: '',
};

const trackResultsSlice = createSlice({
    name: 'trackResults',
    initialState,
    reducers: {
        updateValue: (state, {payload}) => {
            console.log(payload)
            state.inputValue = payload;
        },
    },
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
export const selectValue = state => state.trackResults.inputValue;
export const { updateValue } = trackResultsSlice.actions;
export default trackResultsSlice.reducer;