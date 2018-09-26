import React from 'react';

//props = props.todo  - individual todo
const Todo = ({ todo }) => {


        return (
            <h3>
                {todo.task}
            </h3>
        );


}


export default Todo;