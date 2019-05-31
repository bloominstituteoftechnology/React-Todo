import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.todo.map(item => {
                return (
                    <Todo 
                        item={item}
                        toggleItem={props.toggleItem}
                    />
                )
            })}
        </div>
    );
};



export default TodoList;
