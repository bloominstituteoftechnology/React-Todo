import React from 'react'; 

const Todo = props => {
    return (
        <div>
            {props.todo.map((item, index) => <p key={item.id} id={item.id} onClick={() => {
                item.completed = !item.completed; 
                item.strikeThrough(index); 
            }}>{item.name}</p>)}
        </div>
    )
}

export default Todo; 