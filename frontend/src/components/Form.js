import React from 'react'; 

export const Form  = (props) =>{
    console.log(props);
    return(
        <form onSubmit={props.postTodos} className="form-submit">
            <input type="text" name = "todo" placeholder="Things to get done..."
            onChange={props.handleChange} value={props.value} />
            <button type="submit" className="submit-button" onSubmit={props.postTodos}>Submit Task</button>
            <button type="button" className="submit-button" onClick={props.handleRemove}>Clear Completed</button>
        </form>
    )
}

export const ToDo = (props) =>{
    console.log(props.id, "id");
    console.log(props.todo, "props.todo");
    return (
        <div>
            <h3 className={props.todo.completed ?  "strikeout" : "single-task" } onClick={() => props.handleToggle(props.todo._id)}> 
                {props.todo.todo} 
            </h3>
        </div>
            
    );
};




