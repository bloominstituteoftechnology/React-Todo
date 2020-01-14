// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Item from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todos.map(item => (
                <Item key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button className="clear-button" onClick={props.clearChecked}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;