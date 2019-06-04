import React from 'react';

 const Todo = props => {
    return (
        <div>
            <p className={`${props.item.completed? 'finished-task': null}`} onClick={ () => props.handleEventFinish(props.item.id)}>
                {props.item.task}
            </p>
        </div>
    );
};

 export default Todo; 