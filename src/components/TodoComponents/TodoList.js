// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    return(
        <div className= 'todo-list'>
            {props.todos.map(item => (
                <Todo className= 'todo-items'
                    key= {item.id} 
                    item= {item} 
                    toggleCompleted= {props.toggleCompleted}/>
            ))}
            <button className= 'clear-btn' onClick = {props.clearCompleted}>
                Clear Completed                
            </button>      
            <div>
                <div>
                    <h4>*To clear an item from the list, select the item and click "Clear Completed'</h4>
                </div>
            </div>      
        </div>
        
    )
}
export default TodoList;// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
