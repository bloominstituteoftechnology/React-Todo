import React from 'react';

const TodoForm = props => {
    return (<form>
        <input type="text"  onChange={props.func} onKeyDown={props.func} value={props.value}/>
        <button onClick={props.buttonfunc}>Add To Do</button>
        <button onClick={props.clear}>Clear Completed</button>
        </form>
    )
   }

export default TodoForm
