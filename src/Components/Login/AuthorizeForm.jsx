import { useDispatch } from "react-redux";
import { authorizeUser } from "../../Features/user/authorizeUser";
import { getToken } from "../../Features/user/getToken";
import { useSearchParams } from "react-router";
import { useEffect } from "react";

////// USER is intended to be here when it needs authorization
/////// This Component does tha AUTHORIZATION process of Spotify API
////// This is mainly thinked for USERS to be HERE Only the FIRST TIME 

export default function AuthorizeForm() {
    const dispatch = useDispatch();

    // Get QUERY PARAMS
    const [params] = useSearchParams();

    // The Spotify PCKE auth finishs redirecting us to 'http://localstorage:3000/auth'
    // During the process, 'code: String' QUERY PARAM is created
    // This useEffect checks for it and FETCH TOKEN
    useEffect(() => {
        if (params.has('code')) {
            // Clear the URL
            window.history.replaceState({}, document.title, window.location.pathname);
            // Get VERIFIER CODE
            const verifier = localStorage.getItem('verifier');
            // Get CURRENT TIME in ms
            const timeNow = Date.now() / 1000;
            // DISPATCH action to GET TOKEN and REFRESH token
            dispatch(getToken({
                verifier,
                code: params.get('code'),
                timeNow,
            }));
        };
    }, [params, dispatch]);

    // Handle BUTTON to LOG IN
    const handleUserLogin = () => {
        // 1st. REDIRECTS to Spotify auth page
        // 2nd. REDIRECTS us to 'http://localstorage:3000/auth'
        //      with authorization_code in query params
        dispatch(authorizeUser());
    };

    return (
        <>
            <button onClick={handleUserLogin}>Log in with Spotify</button>
        </>
    )
}