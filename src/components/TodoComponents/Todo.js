import React from 'react'
//task replace item var from exercise
//completed replace purchased in exercise
//Name var is passed via props

const Todo = props => {
let classNames = 'task';
if(props.task.completed) {
    classNames += ' completed';
}

const updateTaskComplete = () => {
    props.toggleComplete(props.task.id);
}
return (
    <div className={classNames} onClick={updateTaskComplete}>
        <p>{props.task.name}</p>
    </div>
)

}
export default Todo