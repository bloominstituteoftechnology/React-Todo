import React from "react";
import useStyles from "../stylesheets/useStyles";


const TodoList = (props) => {
    
    const classes = useStyles()

    console.log('Received props from TodoList', props)
    console.log(classes)
  

    console.log('Received Props from Todolist Component', props)

    return (
        <div>
            <h4 className='display4'>This is the To do list component</h4>
 
        </div>
    )
}


export default TodoList