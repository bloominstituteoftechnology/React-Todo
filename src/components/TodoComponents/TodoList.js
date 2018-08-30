// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import TodoForm  from './TodoForm';

const TodoList = (props) => {
    return (
    <section className="todo-list">
        <ul>
        {props.todoItems.map((todoItem) => {
            if (props.inputText.trim() === "" || (props.inputText.trim().length >= 3 && todoItem.task.includes(props.inputText.trim()))){
              return <Todo 
              todoItem={todoItem.task} 
              complete={todoItem.completed} 
              key={todoItem.id} 
              idKey={todoItem.id} 
              toggleTodo={props.toggleTodo} 
              clickCheck={props.clickCheck}
              clickStore={props.clickStore}
              />;
            }
            return null;
        })}
        </ul>

        <TodoForm 
        inputText={props.inputText} 
        updateInput={props.updateInput} 
        updateTodo={props.updateTodo} 
        clearCompleted={props.clearCompleted}
        />
    </section>
    )
}

export default TodoList;