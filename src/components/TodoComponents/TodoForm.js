import React from 'react'



const TodoForm = (props) =>{

    return (
        <>
        <input  onChange={props.textChange} type="text" placeholder="change me" ></input>
        <button onClick={props.enterItem}>Click me to enter todo item</button>
        <button onClick={props.emptyList}>Click me to empty List</button>
        
        </>
    )
}

export default TodoForm

// {
//     task: 'Organize Garage',
//     id: 1528817077286,
//     completed: false
//   }