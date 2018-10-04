import React from 'react';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = props => {
    return(
       <div>
           <h1>Task Entry: {props.inputText}</h1>
           {props.taskData.map(item => {
               return <p key={item.id}>{item.task}</p>
           })}
       </div>
    );
}

export default TodoList;