import React from 'react';

const ToDoList = (props) => {
    return (
        <ol className="list">
            {props.toDos.map((toDo, i) => {
                return <li className={toDo.classname} key={i}>{toDo.text}
                    <button className="btn-small" id="x-mark" value={toDo.text} onClick={props.removeClick}></button>
                    <button className="btn-small" id="check" value={toDo.text} onClick={props.completeClick}></button>
                </li>;
            })}
        </ol>
    );
};

export default ToDoList;