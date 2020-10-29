import React from "react";



const ToDo = (props) =>  {
    const handleClick = () => {
        props.toggleList(props.item.id)
    }
        return(
            <div onClick={handleClick}>
                <p>{props.item.name}</p>
            </div>
        )
    }
    
    
    export default ToDo