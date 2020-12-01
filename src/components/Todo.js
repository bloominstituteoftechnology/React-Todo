import React from 'react';



const Todo = props => {
    // const handleClick = () => {
    //     props.handleToggle(props.toDos.id);
    // }
    console.log('props', props);
    return (
        <div>
            <p>{props.taskName}</p>
        </div>
    );
};

export default Todo;