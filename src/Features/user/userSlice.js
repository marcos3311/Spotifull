import { createSlice } from '@reduxjs/toolkit';
import { getToken } from './getToken';
import { getData } from './getData';
import { refreshToken } from './refreshToken';
import { authorizeUser } from './authorizeUser';

const initialState = {
    id: '',
    auth: {
        state: false,
        token: '',
        refreshToken: '',
        expiresAt: 0,
        isGetTokenPending: false,
        errorGetToken: false,
    },
    name: 'Guest',
    description: 'No description available.',
    img: '/Assets/Images/profile-default.png',
    url: '#',
    isLoadingUserData: false,
    errorUserData: false,
    isLoadingAuthorize: false,
    errorAuthorize: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authFromLocalStorage: (state, {payload}) => {
            const {token, refresher, expiresAt} = payload;
            console.log(payload)
            state.auth.state = true;
            state.auth.token = token;
            state.auth.refreshToken = refresher;
            state.auth.expiresAt = expiresAt;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
             authorizeUser.fulfilled, (state) => {
                state.isLoadingAuthorize = false;
                state.errorAuthorize = false;
             }
            )
            .addCase(
                authorizeUser.pending, (state) => {
                   state.isLoadingAuthorize = true;
                   state.errorAuthorize = false;
                }
               )
            .addCase(
                authorizeUser.rejected, (state) => {
                state.isLoadingAuthorize = false;
                state.errorAuthorize = true;
             }
            )
            .addCase(
                getToken.fulfilled, (state, action) => {
                    state.auth.state = true;
                    state.auth.token = action.payload.access_token;
                    state.auth.refreshToken = action.payload.refresh_token;
                    state.auth.expiresAt = action.payload.expires_at;
                    state.auth.isGetTokenPending = false;
                    state.auth.errorGetToken = false;
            })
            .addCase(
                getToken.pending, (state) => {
                    state.auth.isGetTokenPending = true;
                    state.auth.errorGetToken = false;
                    state.auth.state = false;
            })
            .addCase(
                getToken.rejected, (state) => {
                    state.auth.isGetTokenPending = false;
                    state.auth.errorGetToken = true;
                    state.auth.state = false;
            })
            .addCase(
                getData.fulfilled, (state, action) => {
                    state.id = action.payload.id;
                    state.name = action.payload.display_name;
                    state.description = action.payload.product;
                    state.img = action.payload.images[0].url;
                    state.url = action.payload.external_urls.spotify;
                    state.isLoadingUserData = false;
                    state.errorUserData = false;
            })
            .addCase(
                getData.pending, (state) => {
                    state.isLoadingUserData = true;
                    state.errorUserData = false;
            })
            .addCase(
                getData.rejected, (state) => {
                    state.isLoadingUserData = false;
                    state.errorUserData = true;
            })
            .addCase(
                refreshToken.fulfilled, (state, action) => {
                    state.auth.state = true;
                    state.auth.token = action.payload.access_token;
                    state.auth.refreshToken = action.payload.refresh_token;
                    state.auth.expiresAt = action.payload.expires_at;
                    state.auth.isGetTokenPending = false;
                    state.auth.errorGetToken = false;
            })
            .addCase(
                refreshToken.pending, (state) => {
                    state.auth.isGetTokenPending = true;
                    state.auth.errorGetToken = false;
                    state.auth.state = false;
            })
            .addCase(
                refreshToken.rejected, (state) => {
                    state.auth.isGetTokenPending = false;
                    state.auth.errorGetToken = true;
                    state.auth.state = false;
            });
}});

export default userSlice.reducer;
export const selectExpiresAt = (state) => state.user.auth.expiresAt;
export const selectPendingToken = (state) => state.user.auth.isGetTokenPending;
export const selectErrorToken = (state) => state.user.auth.errorGetToken;
export const selectToken = (state) => state.user.auth.token;
export const selectRefresher = (state) => state.user.auth.refreshToken;
export const selectIsAuth = (state) => state.user.auth.state;
export const selectName = (state) => state.user.name;
export const selectDescription = (state) => state.user.description;
export const selectImg = (state) => state.user.img;
export const selectId = (state) => state.user.id;
export const selectUrl = (state) => state.user.url;
export const { authFromLocalStorage } = userSlice.actions;