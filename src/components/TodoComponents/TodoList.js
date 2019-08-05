// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import Todo from './Todo'

const TodoList = ({ dummyData, toggleItem }) => {
    
    return (
        <div>
            {dummyData.map(item => (
                <Todo key={item.id} item={item} toggleItem={toggleItem}/>
            ))}
        </div>
    )
}

export default TodoList