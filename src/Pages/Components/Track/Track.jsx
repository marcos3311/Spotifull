import styles from './Track.module.css'

export default function Track({ track }) {
    return (
        <div className={styles.trackContainer}>
            <img src={track.album.images[0].url} alt={track.album.name} className={styles.trackImage} />
            <div className={styles.trackText}>
                <p className={styles.trackName}>{track.name}</p>
                <p className={styles.trackArtist}>{track.artists[0].name}</p>
                <p className={styles.trackAlbum}>{track.album.name}</p>
            </div>
        </div>
    )
}