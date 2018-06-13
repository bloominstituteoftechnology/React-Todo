import React from 'react';
import ToDoForm from './TodoForm';

const ToDo = props => {
    return (
        <div>
            {props.toDos.map((toDo, index) => {
                return <ToDoForm
                    key={toDo.text + index}
                    clearToDo={props.clearToDo}
                    completeToDo={props.completeToDo}
                    toDo={toDo}/>
            })}
        </div>
    );
};

export default ToDo;