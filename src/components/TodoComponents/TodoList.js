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
            if (!(todoItem.completed) && todoItem.task) {
              return <Todo todoItem={todoItem.task} key={todoItem.id} idKey={todoItem.id} toggleTodo={props.toggleTodo}/>;
            }
            return null;
        })}
        </ul>
        <TodoForm inputText={props.inputText} updateInput={props.updateInput} updateTodo={props.updateTodo}/>
    </section>
    )
}

export default TodoList;