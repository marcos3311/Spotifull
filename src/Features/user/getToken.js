import { createAsyncThunk } from '@reduxjs/toolkit';

export const getToken = createAsyncThunk(
    'user/getToken', 
    async ({verifier, code, timeNow} ) => {
        const url = "https://accounts.spotify.com/api/token";
        const payload = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            client_id: process.env.REACT_APP_CLIENT_ID,
            grant_type: 'authorization_code',
            code,
            redirect_uri: 'http://localhost:3000/auth',
            code_verifier: verifier,
          }),
        }
      
        const body = await fetch(url, payload);
        const response = await body.json();

        const {access_token, refresh_token, expires_in} = response;
		console.log("TCL: access_token, refresh_token, expires_in", access_token, refresh_token, expires_in)
        const expires_at = timeNow + expires_in;
        localStorage.setItem('token', access_token);
        localStorage.setItem('refresher', refresh_token);
        localStorage.setItem('expiresAt', expires_at);
        
        return {access_token, refresh_token, expires_at};
    }
);