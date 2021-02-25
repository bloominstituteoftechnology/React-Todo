import React from 'react'; 

const Todo = (props) => {
    return(
        <div>
            <p>{props.children}</p>
            <input type="checkbox" onClick={props.checked}/>
        </div>
    )
}

export default Todo; 