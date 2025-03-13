import { createAsyncThunk } from '@reduxjs/toolkit';

export const getData = createAsyncThunk (
    'user/getUserData',
    async (token) => {
        const response = await fetch("https://api.spotify.com/v1/me", {
            method: "GET", headers: { Authorization: `Bearer ${token}` }
        });
        const data = await response.json();
        const { id, display_name, product, images} = data;
        return { id, display_name, product, images };
        // Later check more properties;
    }
);