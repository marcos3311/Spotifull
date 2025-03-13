import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import store from './store';
import App from './Pages/App/App';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Playlists from './Pages/Playlists/Playlists';
import Search from './Pages/Search/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(createRoutesFromElements((
  <Route path='/' element={<App />}>
    <Route path='auth' element={<Login />} />
    <Route path='home' element={<Home />} />
    <Route path='profile' element={<Profile />} />
    <Route path='playlists' element={<Playlists />} />
    <Route path='search' element={<Search />} />
  </Route>
)));

root.render((
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
))






















// import reportWebVitals from './reportWebVitals';
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
