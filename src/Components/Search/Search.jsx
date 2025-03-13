import './styles.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchName } from '../../Features/trackResults/fetchName';
import { selectToken } from '../../Features/user/userSlice';
import Input from './Components/Input';
import Tracks from '../Components/Tracks';

export default function Search() {
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const [inputValue, setInputValue] = useState(''); // Manages search song input value
    // Function to handle search input value
    const inputHandler = (e) => {
        setInputValue(e.target.value);
    };
    // Function to handle search button
    const searchHandler = (e) => {
        e.preventDefault();
        // Fetch track results if input value is not empty
        if(!inputValue.trim()) return;
        dispatch(fetchName({name: inputValue, token}));
    };

    return (
        <>
            <Input inputValue={inputValue} onInput={inputHandler} onSearch={searchHandler} />
            <Tracks />
        </>
    )
}