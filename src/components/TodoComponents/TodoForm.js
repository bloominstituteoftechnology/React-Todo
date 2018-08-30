import React from 'react';

function TodoForm(props) {
   return (
       <form>
           <input value={props.inputText} onChange={props.handleChange} />
           <button onClick={props.addTodo}>Add Todo</button>
           <button onClick={props.removeTodo}>Clear Completed</button>
       </form>
   );
}


export default TodoForm
