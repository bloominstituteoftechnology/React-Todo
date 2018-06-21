import React from 'react';
import './Todo.css'

const TodoForm = (props) => {
    return (
      <div className='todo-form'>
        <input 
          onChange={props.textHandler}
          type='text'
          placeholder='add todo'
          name='todo'
        />
        <button onClick={props.addHandler}>Add Todo</button>
        <button>Clear Completed</button>
      </div>        
    );
}

export default TodoForm
//onClick={addHandler}

//onChange={this.inputHandler}
          //value={this.state.title}