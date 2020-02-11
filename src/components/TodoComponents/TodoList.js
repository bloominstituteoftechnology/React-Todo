// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return(
        <div className="task">
        <div className='task-list'>
            {props.taskItems.map(item => (
            
                <Todo 
                key={item.id} 
                item={item} 
                toggleComplete={props.toggleComplete} 
                editItem={props.editItem}  
                editChange={props.editChange}
                onClickClear={props.removeCompleted}/>
           ))
           } : 
        </div>
        </div>
    )
}

export default TodoList
