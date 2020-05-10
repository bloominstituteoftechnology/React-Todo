import React from 'react';
import Item from './Item';

const TodoList = props => {

    return(
        <div className='listCont'>
            {props.todo.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    toggleCompleted={props.toggleCompleted}
                />
            ))}
        </div>
    )
}

export default TodoList;