import React from 'react';

const Todo = props => {
    let cName = "item";
    if (props.item.purchased) {
        cName = cName + " done";
    }

    const handleClick = () => {
        props.toggleDone(props.item.id);
    };

    return(
        <div onClick={handleClick} className={cName}>
            <p>{props.item.name}</p>
        </div>
    );
}

export default Todo;