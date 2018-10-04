import React from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';

import './Todo.css';

const TodoList = props => {
    return (
        <div className="todoList">
            <TodoForm
                listContent={props.listContent}
                newListItem={props.newListItem}
                changeHandler={props.changeHandler}
                addNewListItem={props.addNewListItem}
                clearCompleted={props.clearCompleted}
            /> {/* todo list form (text input, submit button, and clear button */}
            {props.listContent.map((listItem) => {
                return (
                    <Todo
                        listItem={listItem}
                        toggleCompleted={props.toggleCompleted}
                        key={listItem.id}
                    />
                )
            })} {/* creates Todo object for each task */}
        </div>
    );
}

export default TodoList;