import React from 'react';

const TodoForm = props => (
    <form>
        <input type='text' 
            value={props.input}
            placeholder='Please Enter a Todo'
            onChange={props.handleChange}
            onKeyDown={(e) => e.keyCode === 13 ? props.addTodo(e) : null}
        />
        <input type="text" 
            value={props.searchInput}
            placeholder="Search Criteria Here"
            onChange={props.onSearchChange}
        />
        <button type="button" onClick={props.addTodo} className="add-btn">Add Todo</button>
        <button type='button' onClick={props.clearComplete}>Clear Completed</button>
        <button type="button" onClick={props.clearAll}>Clear All</button>
    </form>
);

export default TodoForm;