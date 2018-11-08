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
        // todoList={props.todoList}
        key={todo.id}
        todoListItem={todo.task}
        completed= "false"
        toggleCompleted={props.toggleCompleted}
        />
        ))
      }
    </div>
  )
}

export default TodoList;
