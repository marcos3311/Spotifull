import userSlice from './Features/user/userSlice';
import trackResultsSlice from './Features/trackResults/trackResultsSlice.js';
import playlistsSlice from './Features/playlists/playlistsSlice.js'
import { configureStore } from '@reduxjs/toolkit';

const reducers = {
    user: userSlice,
    trackResults: trackResultsSlice,
    playlists: playlistsSlice,
}

const store = configureStore({reducer: reducers});

export default store;