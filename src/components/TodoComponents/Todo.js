import React from "react"; 

const Todo = props => {
    return(
        <div> 
            <p> { props.item.task } </p>
        </div>
    )
}

export default Todo; 