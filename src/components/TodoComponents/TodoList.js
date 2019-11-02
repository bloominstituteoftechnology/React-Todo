// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from './TodoForm.js';
import Todo from './Todo.js';

const TodoList = props => {
    return (
        <div className="todo-list">
            <TodoForm addItem={props.addItem} />
            {props.todo.map(item => (
                <Todo 
                    key={item.id}
                    item={item}
                    toggleDone={props.toggleDone}
                />
            ))}
            <button onClick={props.clearDone}>
                Clear Done
            </button>
        </div>
    );
}

export default TodoList;