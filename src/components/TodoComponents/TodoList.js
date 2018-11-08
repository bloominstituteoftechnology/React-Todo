// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';



const TodoList = props => {
  return (
    <div className="todoContainer">
      <h1>Todo List: MVP</h1>
      {/* {console.log(props, "LIST")} */}
      {props.todoList.map(todo => (
        
        <Todo
        key={todo.id}
        todoOnProps={todo}
        todoListItem={todo.task}
        toggleCompleted={props.toggleCompleted}
        completed="false"
        />
        ))
      }
    </div>
  )
}

export default TodoList;
