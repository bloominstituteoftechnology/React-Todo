import React from 'react';
import Todo from './Todo';

const TodoList = props => { //props become array of objects
  //console.log(props) //to see it in console
  return (
     <div className='todo-list'> 
      {props.todos.map(todo => 
          <Todo todo={todo} key={todo.id} toggleTodo={props.toggleTodo}/>
      )}
    </div>
  );
};

export default TodoList;


//<TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.
