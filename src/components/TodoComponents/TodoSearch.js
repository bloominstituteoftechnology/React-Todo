import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [search, setSearch] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    setFilteredTodos(
      todos.filter(todo => todo.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  const onInputChange = e => {
    const { value } = e.target;
    setTodo(value);
  };

  const onSearchChange = e => {
    const { value } = e.target;
    setSearch(value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  const myArray = filteredTodos.length ? filteredTodos : todos;

  return (
    <div className="App">
      <form onSubmit={onFormSubmit}>
        <input value={todo} onChange={onInputChange} />
        <input placeholder="Search" value={search} onChange={onSearchChange} />
        <button type="submit">Add Todo</button>
      </form>
      <div>
        {myArray.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
      </div>
    </div>
  );
}
