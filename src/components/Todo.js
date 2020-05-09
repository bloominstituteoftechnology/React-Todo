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

<p className="w3-border w3-orange " >{props.list.task}</p>

    </div>
)


}

export default List;