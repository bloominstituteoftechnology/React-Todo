import React from 'react';

import Item from './Item';

const TodoList = props => {
    // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
    return (
        <div className="shopping-list">
            {props.toDoItems.map(item => (
                <Item key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear Completed
      </button>
        </div>
    );
};

export default TodoList;
