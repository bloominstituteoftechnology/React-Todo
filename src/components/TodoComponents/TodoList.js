// `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.
import React from 'react';

export default function ToDoList( {toDoArray} ) {
    return (
     {
         toDoArray.map(toDo => <Todo todoData={toDo}/>)
     }   
    )
}