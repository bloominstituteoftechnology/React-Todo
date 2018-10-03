// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const ToDo = props => {
    return(
        <div>
            {props.toDolists.map(item =>{
             return <h1>{item.task} {item.completed} {item.id}</h1>;
            })}
        </div>
    );
};

export default ToDo;
