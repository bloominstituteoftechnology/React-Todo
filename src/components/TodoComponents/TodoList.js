// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';


const TodoList = props => {
  return (
    <div className="todoContainer">
    {console.log(props.todoList, "s")}
      <h1>Todo List: MVP</h1>
      {props.todoList.map(todo => (
        <Todo
          todoList={todo.todoList}
          key={todo.id}
          todoListItem={todo.task}
          completed={todo.completed}
        />
      ))
      }
        <TodoForm />
    </div>
  )
}

export default TodoList;
