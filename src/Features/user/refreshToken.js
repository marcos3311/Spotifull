 import { createAsyncThunk } from '@reduxjs/toolkit';
export const refreshToken = createAsyncThunk(
    'user/refreshToken',
    async (refresher) => {
        console.log(refresher);
        // API url
        const url = "https://accounts.spotify.com/api/token";
        // API POST fetch to refresh the token
        const payload = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refresher,
            client_id: process.env.REACT_APP_CLIENT_ID,
            }),
        }
        // FETCH
        const body = await fetch(url, payload);
        // JSON
        const response = await body.json();
        // Destructuring object properties
        const {access_token, refresh_token, expires_in} = response;
        // Time NOW in ms plus TOKEN EXPIRE time (1 hour in ms)
        const expires_at = expires_in + Date.now() / 1000;
        // Save data in localStorage
        localStorage.setItem('token', access_token);
        localStorage.setItem('refresher', refresh_token);
        localStorage.setItem('expiresAt', expires_at);

        console.log('refreshing...')
        return {access_token, refresh_token, expires_at};
    }
)