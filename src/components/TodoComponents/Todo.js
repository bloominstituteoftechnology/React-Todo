import React from 'react';

const Todo = props => {
    return (
        <div>
            {props.listContent.map((listItem) => {
                return (
                    <h1>{listItem.task}</h1>
                );
            })
        }
        </div>
    );
}

export default Todo;