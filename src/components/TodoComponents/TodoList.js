import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    // console.log(props.todoData)
    return (
        <div>
            {props.todoData.map(item => (
                <Todo key={item.id} task={item.task} toggleTask={props.toggleTask} />
            ))}   

            <button>
                Clear Complete Tasks
            </button>
        </div>
    )
}


export default TodoList
