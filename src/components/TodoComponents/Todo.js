import React from 'react';
// import ToDo from './'

const ToDo = (props) => {
    return (
        <div>
            {props.toDoTasks.map((item, index) => {
                return (
                    <h1
                        key={index}
                        onClick={() => props.markDone(index)}
            )
            })}
        </div>
    )
}

export default ToDo;