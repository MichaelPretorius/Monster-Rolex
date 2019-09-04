import React from 'react';
import './searchBox.css';

const SearchBox = ({ placeholder, onChange }) => {
    return (
        <input
            className="search-box"
            type="search"
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}

export default SearchBox;
