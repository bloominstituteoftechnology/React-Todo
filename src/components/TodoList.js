// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {

    const {toggleItem} = props;

    return(

        <div className = 'todo-list'>

            {props.todo_collection.map(item =>(
                <Todo key={item.id} item={item} toggleItem={toggleItem}/>
            ))}

        </div>

    )
    
}

 export default TodoList;