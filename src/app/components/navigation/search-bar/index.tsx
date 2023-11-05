"use client";
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        // Call the onSearch callback with the search query
        onSearch(query);
    };

    return (
        <div className="flex items-center">
            <input 
                type="text"
                placeholder="Search for products..."
            />
            <button>
                Search
            </button>
        </div>
    )
}

export default SearchBar;