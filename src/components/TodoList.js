// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Item from "./Item";



const TodoList = props => {
    const [task, id, purchased] = props.todoList;
    console.log(props.todoList)
    


    return (
       
        <div className="todo-list">
            {props.todoList.map(item => (<ul>
                <li><Item toggleItem={props.toggleItem} key={item.id} item={item.task} /></li>
            </ul>
            ))} 
            <button className="clear-btn" onClick={() => !purchased(id)} style={{"textDecoration": "line-through"}}>
                Strike out Purchased
            </button>
       </div>
            );
    
       
    }



export default TodoList
