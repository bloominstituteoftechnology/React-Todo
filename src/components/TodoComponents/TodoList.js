// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

function TodoList(props) {
    return (
       <div>
            {props.todoItemList.map((task) => {
                console.log(task)
                return <Todo task={task} />;
            }
            )}
            </div>
    )
     
    }

export default TodoList