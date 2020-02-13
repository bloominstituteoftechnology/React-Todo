import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(()=> {
    const results = props.TodoList.filter(TodoList =>{
      return TodoList.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setSearchResults(results);
  }
    ,[props.TodoList, searchTerm])

    const handleChange = e => {
      setSearchTerm(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
    }
    return(
    <div>
     <form  onSubmit={handleSubmit}>
       <label htmlFor='name'>Search:</label>
       <input
       id='search' type='text'placeholder='Task Search'
       onChange={handleChange}
       value={searchTerm}/>
       <button>Submit</button>
     </form>
      {searchResults.map(todo => <TodoList key={todo.id} todo={todo}/>)}
    </div>
    );
}