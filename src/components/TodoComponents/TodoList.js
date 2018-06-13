// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = (props) => {
    console.log('todo list passed stuff: ', props)
    return (    
        props.passedstateasprops.map((item, i) => {
            return (
                <div key={i}>{item.task}  </div>
        )
    }))
}
 
export default TodoList;