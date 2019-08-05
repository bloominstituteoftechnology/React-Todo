// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import Todo from './Todo'

import { StyledList } from '../../StyledComp'

const TodoList = ({ dummyData, toggleItem }) => {
    
    return (
        <StyledList>
            {dummyData.map(item => (
                <Todo key={item.id} item={item} toggleItem={toggleItem}/>
            ))}
        </StyledList>
    )
}

export default TodoList