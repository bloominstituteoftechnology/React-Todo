import React from 'react';

const Todo = props => {
    const items = props.todoList.map((currentItem, index) => {
        return (
            <div key={index}>
                <p>{currentItem.index}</p>
            </div>
        )
         
    })
}

export default Todo