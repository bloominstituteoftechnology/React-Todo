import React from 'react';

const Todo = props => {
    // console.log(props)
    return(
        <React.Fragment>
            <p className="para" onClick={props.strike}>{props.task}</p>
        </React.Fragment>
    );
}

export default Todo;

//`<Todo />` is a component that takes in the `todo` data and 
//displays the task to the screen.