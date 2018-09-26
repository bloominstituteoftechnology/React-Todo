import React from 'react';



const Todo = (props) => {

        return (

            <div>
                {props.todos.map(todo => { return (<div> {todo.task} </div>) })}
            </div>
        
        )}

export default Todo;