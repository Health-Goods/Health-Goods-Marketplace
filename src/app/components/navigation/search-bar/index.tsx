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
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="p-2 border border-gray-300 rounded-1 focus:outline-none"
            />
            <button
                onClick={handleSearch}
                className="bg-green-700 text-white p-2 rounded-r hover:bg-green-800 focus:outline-none"
            >
                Search
            </button>
        </div>
    )
}

export default SearchBar;