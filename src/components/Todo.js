import React from 'react';

const ToDo = ({ desc, handleMarkCompleted, id, completed }) => {
    return (
        <li style={{...styles.toDoLi, textDecoration: `${completed ? "line-through" : "none"}` }} onClick={() => handleMarkCompleted(id)}>
            {desc}
        </li>
    )
}

const styles = {
    toDoLi: {
        cursor: "pointer"
    }
}

export default ToDo;