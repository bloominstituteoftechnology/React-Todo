import React from 'react';

    const TodoList = props => {
        return(
            <div className= "whatever">
                {props.todoDate.map(item => (
                    <Todo key={item.id} item={item} toggleItem={props.toggleItem}/>
                ))}
                <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed
      </button>
            </div>
        )
    }


export default  TodoList
