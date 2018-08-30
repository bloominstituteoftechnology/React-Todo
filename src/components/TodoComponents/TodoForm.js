import React from 'react';

function TodoForm(props) {
   return (
       <form>
           <input
            value={props.inputText}
            onChange={props.handleChange}
            placeholder='new task...'
            name="todoText" />
           <button onClick={props.addTodo}>Add Todo</button>
           <button onClick={props.removeTodo}>Clear Completed</button>
       </form>
   );
}


export default TodoForm
