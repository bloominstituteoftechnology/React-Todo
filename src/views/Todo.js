import React from 'react'; 

const Todo = (props) => {
    return(
        <div onClick={ (id) => {
            console.log(props.data.id)
        }}>
            {props.data.task}
            <input onClick={props.checked} type="checkbox" />
        </div>
    )
}

export default Todo; 