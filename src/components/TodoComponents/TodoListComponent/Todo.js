import React from 'react';


const Todo = props => {

    if(props.taskData.length === 0){
       return(
           <div>
                <h1>There are no task entries.</h1>
                <h2>Enter your first Todo Task.</h2>
           </div>
        );
    }
    
    return(
        <div>
        {/* <h1>Task Entry: {props.inputText}</h1>
        <h2>Task Description: {props.descriptionText}</h2> */}

        <h1>Todo Tasks: </h1>
        {props.taskData.map(item => {
            return (
            
            <div className="task" key={item.id}>
            <p>TaskId: {item.id}</p>
            <p>Task: {item.task}</p>
            <p>Description: {item.descriptionText}</p>
            </div>
         );
        })}
    </div>
    );
}

export default Todo;