import React from 'react';
import TodoList from './TodoList'
import TodoForm from './TodoForm'

export default function TodoComponent(props) {
  const {toDoList, newToDo, addTodo, clearCompleted, changeHandler, enterHandler} = props;
  return(
    <div>
      <h2>Todo List: MVP</h2>
      <TodoList toDoList={toDoList}/>
      <TodoForm newToDo={newToDo} addTodo={addTodo} clearCompleted={clearCompleted} changeHandler={changeHandler} enterHandler={enterHandler} />
    </div>
  )
}