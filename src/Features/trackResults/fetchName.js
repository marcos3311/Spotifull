import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchName = createAsyncThunk(
    'trackResults/fetchName',
    async ({ name, token }) => {
        console.log(token)
        const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(name)}&type=track`, {
            method: "GET", headers: { Authorization: `Bearer ${token}` }
        });
        const data = await response.json();
        return data.tracks.items;
    }
)