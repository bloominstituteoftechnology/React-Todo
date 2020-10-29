import React from "react";

const Todo = props =>{

const handleClick = (e) =>{
   props.toggleCompleted(props.activity.id)
}

return(
    <div
    onClick={handleClick}
    className={`activity${props.activity.completed ? 'completed' : ''}`}>
        <p>{props.activity.name}</p>
    </div>
)


}
export default Todo;