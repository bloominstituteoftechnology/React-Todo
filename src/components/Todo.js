import React from 'react';
import styled from "styled-components"
import "./Todo.css"

const Todo =props =>{

    // const changeCompleted = e=>{
    //    e.target.value = true
    // };

    return(
    
        <div className={`item${props.completed ? 'completed' : ''}`} >
            {props.task}
           
        </div>
     
    ); 
};





export default Todo;