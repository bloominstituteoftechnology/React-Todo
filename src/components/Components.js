import React from 'react';

const Components = props => {
    return (
        <ul>
            {props.list.map( (item, i) => {
                return (
                    <li key={item.id}
                    id={item.id}
                    onClick={() => {
                        item.completed = !item.completed;
                        item.strikethrough(i);
                    }}>
                    {item.name}
                    </li>
                );
            })}
        </ul>
    )
}

export default Components;