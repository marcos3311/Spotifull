
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth } from "../../Features/user/userSlice";
import { selectToken } from "../../Features/user/userSlice";
import { getData } from "../../Features/user/getData";
import { selectId } from "../../Features/user/userSlice";
import Aside from "./Components/Aside";
import Header from "./Components/Header";
import './styles.css'
import { fetchPlaylists } from "../../Features/playlists/playlistsSlice";

export default function Frame() {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);
    const token = useSelector(selectToken);
    const id = useSelector(selectId);

    useEffect(() => {
      // If USER is Authenticated and ID is truthy 
      if (isAuth && !id) { 
        // CLEAR the URL
        window.history.replaceState({}, document.title, window.location.pathname);
        // DISPATCH action to FETCH USER DATA
        dispatch(getData(token))
        // DISPATCH action to FETCH USER PLAYLISTS
        dispatch(fetchPlaylists({token, id}))  
      }
    }, [id, token, isAuth, dispatch]);
    return (
        <>
            <Header />
            <Aside />
        </>
    );
}
  