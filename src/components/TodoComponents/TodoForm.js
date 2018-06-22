import React from 'react';
import './Todo.css'

const TodoForm = (props) => {
    return (
      <div className='todo-form'>
        <input 
          onChange={props.textHandler}
          type='text'
          placeholder='todo...'
          name='todo'
          value={props.next}
        />
        <button onClick={props.addHandler}>Add Todo</button>
        <button onClick={props.deleteHandler}>Clear Completed</button>
      </div>        
    );
}

export default TodoForm