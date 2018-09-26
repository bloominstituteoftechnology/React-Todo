import React from 'react';

const ToDoForm = (props) => {
  return (
    <section className="todo-form">
    <form>
      <input className='todo-input' placeholder='...todo'></input>
    <button className='btn add-btn' onClick={props.submit}>
      Add Todo
    </button>
    <button className='btn clear-btn' onClick={props.remove}>
      Clear Completed
    </button>
    </form>
    <h2>Search for Todo</h2>
    <input className='todo-input' placeholder='search todos' onChange={props.search}></input>
    </section>
  );
}

export default ToDoForm;
