import React from 'react';


const TodoList = props => {
    return (
        <div>
            {props.toDoList.map(list => {
                return <div key={Math.random()}>{list.task}</div>;
            })}
        </div>
    );
};


export default TodoList;