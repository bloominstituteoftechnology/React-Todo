import React from 'react';
import './Todo.css';

const TodoSearch = props => <input type="text" className="todoSearch" name="search" placeholder="Search..." onChange={props.handleSearch} value={props.search}/>

export default TodoSearch;