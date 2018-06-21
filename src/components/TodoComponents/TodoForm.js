import React from 'react';
import './Todo.css'

const TodoForm = () => {
    return (
      <div className='todo-form'>
        <input 
          type="text"
          placeholder="add todo"
          name="todo"
        />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </div>        
    );
}

export default TodoForm
//onClick={addHandler}

//onChange={this.inputHandler}
          //value={this.state.title}