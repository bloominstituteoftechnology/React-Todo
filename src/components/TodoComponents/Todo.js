import React from 'react';
import "./Todo.css"
import TodoList from './TodoList'
import TodoForm from './TodoForm'

export default function TodoComponent(props) {
  const {toDoList, newToDo, addTodo, clearCompleted, changeHandler, enterHandler} = props;
  return(
    <div className="todo-app">
      <h1>REACT TODO LIST</h1>
      <TodoForm newToDo={newToDo} addTodo={addTodo} clearCompleted={clearCompleted} changeHandler={changeHandler} enterHandler={enterHandler} />
      <TodoList toDoList={toDoList}/>
    </div>
  )
}