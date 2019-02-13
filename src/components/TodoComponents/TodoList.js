// `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.
import React from 'react';
import Todo from './Todo';

export default function ToDoList(props) {
    return (
        <div>
            {
              props.todoObject.map(toDo => <Todo key={toDo.id} todoData={toDo.task}/>)
            }
        </div>
    );
}