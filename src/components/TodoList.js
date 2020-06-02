// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Item from "./Item";



const TodoList = props => {
    const [task, id] = props.todoList;
    console.log(props.todoList)
    


    return (
       
        <div className="todo-list">
            {props.todoList.map(item => (
                <Item toggleItem={props.toggleItem} key={item.id} item={item.task} />
                
            ))}
            <button className="clear-btn" onClick={props.clearPurchased}>
                Clear Purchased
      </button>
       </div>
            );
    
       
    }



export default TodoList
