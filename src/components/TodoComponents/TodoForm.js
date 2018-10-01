import React from 'react';

const TodoForm = props => {
    return (<form>
        <input type="text" onSubmit={props.func} onKeyDown={props.func} name="todolist" />
        <input type="submit" value="Add To Do" name="todolist" />
        <button>Clear Completed</button>
        </form>
    )
   }

export default TodoForm
