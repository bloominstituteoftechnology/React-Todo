// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return(
        <div>
            {props.todoArray.map((todo, index) => {
                return <Todo index={index} key={index} todo={todo} changeText={props.changeText} />
            })}
           
        </div>
    )
}

export default TodoList;