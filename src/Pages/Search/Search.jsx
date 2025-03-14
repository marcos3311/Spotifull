import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchName } from '../../Features/trackResults/fetchName';
import { selectToken } from '../../Features/user/userSlice';
import { Input } from '../Components/Input/Input';
import Tracks from '../Components/Tracks/Tracks';
import { selectValue, updateValue } from '../../Features/trackResults/trackResultsSlice';

export default function Search() {
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const initialValue = useSelector(selectValue);
    // Function to handle search button
    const searchHandler = (e, value) => {
        e.preventDefault();
        // If VALUE is NOT STRING Return
        if(typeof value !== 'string') {
            dispatch(updateValue(''));
            return
        } else { // If TRUE Update State
            dispatch(updateValue(value));
        }
        // FETCH track results
        dispatch(fetchName({name: value, token}));
    };

    return (
        <>
            <Input handleSubmit={searchHandler} initialValue={initialValue} />
            <Tracks />
        </>
    )
}