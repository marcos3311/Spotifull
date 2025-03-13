import { createAsyncThunk } from '@reduxjs/toolkit';
import useVerifier from '../../Pages/Login/Hooks/useVerifier';

export const authorizeUser = createAsyncThunk(
    'user/authorizeUser',
    async () => {
        let verifier = useVerifier();
        // Get local storage variables
        const localVerifier = localStorage.getItem('verifier');
        const localChallenge = localStorage.getItem('challenge');
        const fetchChallenge = async () => {
            if (localVerifier !== null && localChallenge !== null) {
                verifier = localVerifier;
                return localChallenge;
            } else if (localVerifier !== null) {
                verifier = localStorage.getItem('verifier');
            } else {
                localStorage.setItem('verifier', verifier);
            }

            // Create challenge
            const data = new TextEncoder().encode(verifier);
            const digest = await window.crypto.subtle.digest('SHA-256', data);
            const challenge = btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');

            localStorage.setItem('challenge', challenge);
            return challenge;
        }
        
        fetchChallenge().then((code) => {
            const params = {
                response_type: 'code',
                client_id: process.env.REACT_APP_CLIENT_ID,
                scope: 'user-read-private user-read-email',
                code_challenge_method: 'S256',
                code_challenge: code,
                redirect_uri: 'http://localhost:3000/auth',
            }
    
            const authUrl = new URL("https://accounts.spotify.com/authorize");
            authUrl.search = new URLSearchParams(params).toString(); 
    
            window.location.href = authUrl.toString();
        });
    }
);