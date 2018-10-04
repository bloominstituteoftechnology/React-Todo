// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// takes in todo data and displays to screen
import React from 'react';
//import './styles.css';
import Todo from './Todo';

const TodoList = props =>{
    return(
        <div>
            {props.listData.map((item,index) => {
            return( 
            <Todo 
            className={item.color}
            item={item.listItem}
            
            onClick={()=> props.changeColor(index)}/>)
        })}
        </div>
    )
}
export default TodoList;

// I do not know why this wasn't working so I put it directly into my code

// This could not take in listData when it was exported to app.js