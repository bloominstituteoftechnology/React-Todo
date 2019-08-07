import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
        return (
            props.array.map((item) => {
            return (
            <Todo task={item.task} />
            )
                    
            }
            )
        )
    }
    

export default TodoList;