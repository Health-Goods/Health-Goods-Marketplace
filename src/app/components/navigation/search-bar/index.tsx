"use client";
import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void; // Define the type for the onSearch prop
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState(''); // useState for users search query

    const handleSearch = () => {
        onSearch(query); // Call the onSearch callback with the search query
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