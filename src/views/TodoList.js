import './Todo.css';
import React from 'react';
import Todo from './Todo.js';
import Controls from './Controls.js'

const TodoList = props => {

    return(
        <div className="container">
            <h1> Todo List App </h1>
            
            <div className="form-container">

                {props.data.list.map((item) => 
                    <Todo 
                        key={item.id} 
                        getId={props.getId}
                        checked={props.checked}  
                        data={item}  />
                )}

                <form>
                    {console.log(props.data.list)}

                    <Controls />
                </form>
            </div>
        </div>
    )
}

export default TodoList; 