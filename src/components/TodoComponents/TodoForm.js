import React from 'react';

function TodoForm(props) {
   return (
       <form>
           <input value={props.inputText} onChange={props.handleChange} />
           <button onClick={props.addTodo}>Add Todo</button>
           <button onClick={props.removeTodo}>Remove Todo</button>
       </form>
   );
}



// const TodoForm = props =>
//
//   <form>
//     <input onChange={props.handleChange} value={props.inputText}></input>
//     <button>Add Task</button>
//     <button>Remove Completed</button>
//   </form>


  {/* // input field      //aqui value y handleChange
  // todo button     //aqui handleSubmit
  // clear completed button   //aqui supongo que solo handle click */}

export default TodoForm
