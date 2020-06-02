// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Item from "./Item";



const TodoList = props => {
   console.log(props.todoList)
    


    return (
       
        <div className="todo-list">
            {props.todoList.map(item => (
                <Item toggleItem={props.toggleItem} key={item.id} todoList={item}  />
            
            ))} 
            <button className="clear-btn">
                Strike out Purchased
            </button>
       </div>
            );
    
       
    }



export default TodoList
