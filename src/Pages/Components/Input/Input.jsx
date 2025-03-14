import { useState } from "react";

export function Input({ initialValue = '', handleSubmit = false }) {
    // Saves local Input VALUE
    const [value, setValue] = useState(initialValue ? initialValue : '');
    // Sets local VALUE with Input value
    const onChange = (e) => {
        const inputValue = e.target.value
        setValue(inputValue.trim());
    }
    // Render Conditional
    const renderInput = () => {
        if(handleSubmit) {
            return (
                <form className="input-container">
                    <input type="text" className="input" placeholder="Search for a song, album, or artist" value={value} onChange={onChange} />
                    <button type="submit" onClick={(e) => handleSubmit(e, value)}>Search</button>
                </form>
            );
        } else {
            <input type="text" value={value} onChange={onChange} />
        }
    };

    return (
        <>
            {
                renderInput()
            }
        </>
    )
}