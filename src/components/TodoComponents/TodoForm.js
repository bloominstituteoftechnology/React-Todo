import React from 'react';

const TodoForm = props => {
    return (<form>
        <input type="text"  onChange={props.func} onKeyDown={props.func}/>
        <button>Add To Do</button>
        <button>Clear Completed</button>
        </form>
    )
   }

export default TodoForm
