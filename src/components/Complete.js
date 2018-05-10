import React from 'react';

const Complete = props => {
    return (
        <ul>
            {props.todos.map( (item, i) => {
                return (
                    <li key={item.id}
                        id={item.id}
                        onClick={() => {
                            item.completed = !item.completed;
                            item.strikeThrough(i);
                        }}>
                        {item.name};
                    </li>
                );
            })}
        </ul>
    )
}

export default Complete;