const SearchBar = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit} id="search-form">
                <input type="text" name="search" placeholder="Enter movie keywords..." id="search-bar" ></input>
                <input type="submit" className="submit-btn" />
            </form></div>
    );
}

export default SearchBar;