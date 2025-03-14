import { Playlist } from "../Playlist/Playlist";

export function Playlists({ playlists }) {
    // Name -- Image -- Id
    return(
        <>
            {
                playlists.map((playlist) => {
                    return (
                        <Playlist image={playlist.image} name={playlist.name} />
                    )
                })
            }
        </>
    )
}