import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="task-list">
            {props.tasks.map(item => (
                <Item key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button className="clear-btn" onClick={props.clearDone}>
                Clear Done
            </button>
        </div>
    );
};

export default TodoList;