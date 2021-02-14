import React from 'react'; 

const Todo = (props) => {
    return(
        <div>
            {props.data.task}
            <input onClick={props.checked} type="checkbox" />
        </div>
    )
}

export default Todo; 