import React from 'react';
import Todo from './Todo';

    const TodoList = props => {
        return(
            <div className= "whatever">
                {props.todoData.map(item => (
                    <Todo key={item.id} todo={item} toggleItem={props.toggleItem}/>
                ))}
                <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
            </div>
        )
    }


export default  TodoList
