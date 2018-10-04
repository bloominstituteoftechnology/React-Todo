// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return(
        <div className="taskList">
            {props.todoArray.map((todo, index) => {
                return <Todo name={props.name} index={index} key={index} todo={todo} changeText={props.changeText} changeLine={props.changeLine} />
            })}
           
        </div>
    )
}

export default TodoList;