import React from 'react';
import './Todo.css';

export default function SearchBar(props) {
    const value = props.value;
    const searchChange = props.searchChange;

    return (
        <input 
            type="text"
            placeholder="Search..."
            value={value}
            onChange={searchChange}
        />
    )
}