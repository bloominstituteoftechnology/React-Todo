import React from "react"; 

const Chore = props => {
    return (
        <div
        onClick={() => props.toggleChores(props.chore.id)}
        className={`chore${props.chore.completed ? " completed" : ""}`}
        >
            <p>{props.chore.task}</p>
        </div>
    ); 
}; 

export default Chore; 