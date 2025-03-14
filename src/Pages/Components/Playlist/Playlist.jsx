import styles from './playlist.module.css';

export function Playlist({ name, image }) {
    return (
        <>
            <picture className={styles.imageContainer}>
                <img src={image} className={styles.image} alt="" />
            </picture>
            <div className={styles.textContainer}>
                <p className={styles.name}>{name}</p>
            </div>
        </>
    )
}