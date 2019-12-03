import React from 'react';



const TodoForm =props=> {
console.log(props)
  
        return(
            <div>
                <form>
                     <input 
                     onChange={props.handleTodoChange}
                     type='text'
                     name='todo'
                     value={props.value}
                     placeholder='To Do.'
                     />
                     <button onClick={props.handleAddTodo} >Add to to do list.</button>
                     <button onClick={props.handleClearTodos}>Clear completed.</button>
                </form>
             </div>
        )
    }

export default TodoForm