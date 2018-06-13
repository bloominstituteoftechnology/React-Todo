// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
// import { Card, CardHeader } from 'reactstrap'; //doesn't work

const TodoList = (props) => {
    console.log('todo list passed stuff: ', props)
    return (    
        props.passedToTodoList.map((item, i) => {
            return (
                <div key={i} className='cardWrapper'>
                    <div className='cardContent'>
                        <h4
                            style={item.completed ? { textDecoration: 'line-through' } : null }    
                            
                            onClick={() => props.handleToggle(item.id)}>{item.task}  
                        </h4>
                    </div>
                </div>
        )
    }))
}
 
export default TodoList;