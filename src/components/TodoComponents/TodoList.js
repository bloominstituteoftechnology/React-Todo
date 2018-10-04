// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    
    return (
        <ul>
            {props.taskData.map((item, index) => {
              
                return (
                    <Todo 
                    key={item.id} 
                    taskItem={item} 
                    taskIndex={index}
                    changeBool={props.changeBool}
                        />
                   
                )
            })}
             
        </ul>
    )
}

export default TodoList;