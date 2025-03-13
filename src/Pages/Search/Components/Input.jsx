export default function Input({ inputValue, onInput, onSearch }) {
    return (
        <form className="input-container">
            <input type="text" className="input" placeholder="Search for a song, album, or artist" value={inputValue} onChange={onInput} />
            <button type="submit" onClick={onSearch} >Search</button>
        </form>
    )
}