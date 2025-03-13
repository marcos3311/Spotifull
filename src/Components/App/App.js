// 12/3/25 23:08 -- Working well!
import { Outlet } from 'react-router';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authFromLocalStorage, selectIsAuth } from '../../Features/user/userSlice';
import Frame from '../Frame/Frame';
import './App.css';
import { refreshToken } from '../../Features/user/refreshToken';

// ---->>> MAKE an INPUT component that works with STORE and saves SEARCH Value

// // // // // <App /> Will render everytime
// // // // Checks for data at LOCALS STORAGE and updates STORE
// // // Check REACT-ROUTER config at '../../store.js'

function App() {
  const dispatch = useDispatch();
  // True if user already authorized
  const isAuth = useSelector(selectIsAuth);
  // Get token data from localStorage
  const token = localStorage.getItem('token');
  const refresh = localStorage.getItem('refresher');
  const expires = localStorage.getItem('expiresAt');

  useEffect(() => {
    // If user ALREADY AUTHORIZED return
    if (isAuth) return;
    // If localStorage items exists
    if (token && refresh && expires) {
      dispatch(authFromLocalStorage({token, refresh, expires}));
    }
    // Logic to check if TOKEN EXPIRED
    const timeNow = Date.now() / 1000; // Time NOW in ms
    // TRUE if token EXPIRED
    const isExpired = (expires - timeNow) <= 0;
    if(isExpired && expires !== null) { // null <= 0 = TRUE !!!!
      console.log('i entered dispatch!!!!')
      dispatch(refreshToken(refresh));
    }
  }, [token, refresh, expires, isAuth, dispatch]);

  return (
    <div className='App'>
      <Frame />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
