import { useSelector } from "react-redux";
import { selectUserPlaylists } from "../../../Features/playlists/playlistsSlice";
import { Playlists } from "../../Components/Playlists/Playlists";

export default function Aside() {
    const items = useSelector(selectUserPlaylists);
    return(
    <aside>
        <Playlists playlists={items} />
    </aside>
)
}