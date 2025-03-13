import userSlice from './Features/user/userSlice';
import trackResultsSlice from './Features/trackResults/trackResultsSlice.js';
import { configureStore } from '@reduxjs/toolkit';

const reducers = {
    user: userSlice,
    trackResults: trackResultsSlice,
}

const store = configureStore({reducer: reducers});

export default store;