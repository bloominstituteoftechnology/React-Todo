import React from "react";

const List = props => {

const handleClick = e => {

    props.toggleToDo(props.list.id);

};

return (

    <div 
    onClick={handleClick}
    className={`list${props.list.completed ? " completed" : ""}`}
    >

<p>{props.list.name}</p>

    </div>
)


}

export default List;