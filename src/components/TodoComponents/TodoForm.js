import React from 'react';

//make a function called TodoForm, this will be where you create all
//of the button and input objects for the list. 
//this function is putting logic into the input and the buttons
//it is setting up what will be used in the render. 
//onChange occurs when the value of an element has been changed. 
//value is the task that the user puts into the input. 
//onClick is allowing an Event to occur when clicked. 
const TodoForm = props => {
  return (
    <form>
    {/*make an input*/}
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="Type your Todo"
      />
      <button onClick={props.handleAddTodo}>Add Todo</button>
      <button onClick={props.handleClearTodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;