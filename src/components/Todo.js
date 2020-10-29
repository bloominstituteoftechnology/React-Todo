import React from "react";


const Todo = () => {
    const handleClick = (props) => {
        props.toggleList(props.item.id)
    }

    return(
        <div onClick={handleClick}>
        <p>{props.item.name} </p>
        </div>
    )


}

export default Todo