import { NavLink } from "react-router";

export default function Nav() {
    return (
        <ul className="nav">
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/playlists'>Playlists</NavLink></li>
            <li><NavLink to='/profile'>Your Profile</NavLink></li>
            <li><NavLink to='/search'>Search Song</NavLink></li>
            <li>Menu4</li>
        </ul>
    )
}