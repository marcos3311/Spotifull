import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPlaylists = createAsyncThunk(
    'fetchPlaylists',
    async ({token, id}) => {
        const response = await fetch(`https://api.spotify.com/v1/users/${id}/playlists`, {
            method: "GET", headers: { Authorization: `Bearer ${token}` }
        });
        const data = await response.json();
        console.log(data)
        const { items } = data; // Array of Objects
        return { items };
        // Later check more properties;
    }
)

const newPlaylist = (id, image, name) => {
    return {
        id,
        image,
        name,
    }
}

const initialState = {
    user: [],
}

const playlistsSlice = createSlice({
    name: 'playlists',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchPlaylists.fulfilled, (state, { payload }) => {
                    const { items } = payload;
                    console.log(items);
                    items.forEach(item => {
                        const { id, images, name } = item;
                        state.user.push(newPlaylist(id, images[0].url, name))
                    })
                }
            )
    }
});

export const selectUserPlaylists = state => state.playlists.user;
export default playlistsSlice.reducer;