import styles from './Tracks.module.css';
import { useSelector } from 'react-redux';
import { selectResults } from '../../Features/trackResults/trackResultsSlice';
import Track from './Track';

export default function Tracks() {
    const tracks = useSelector(selectResults);
    return (
        <div className={styles.container}>
            {tracks.map((track, index) => <Track key={index} track={track} />)}
        </div>
    )
};