import React from 'react';


const TodoForm = props => {
  return{
  <div> className='todo-form'>
  <input
  type='text'
  placeholder='...todo'
  name='add-todo-input'
  value={props.inputItem}
  />
  <button onClick ={props.handleAddTodo>Clear}> Add Todo</button>
  <button onClick ={props.handleClearTodos> Clear Completed</button>
  </form>
  };
}

export default TodoForm;