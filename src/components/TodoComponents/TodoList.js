import React from 'react';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = props => {
    return(
       <div>
           <h1>Task Entry: {props.inputText}</h1>
           {props.taskData.map(item => {
               return (
               
               <div className="task" key={item.id} onMouseOver={props.taskCompleted}>
               <p>TaskId: {item.id}</p>
                <p>Task: {item.task}</p>
               </div>
            );
           })}
       </div>
    );
}

export default TodoList;