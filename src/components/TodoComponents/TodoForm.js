import React from 'react';

const TodoForm = props => {
    return (<form>
        <input type="text" onKeyDown={props.func} onSubmit={props.func} />
        <input type="submit" value="submit" />
        <button>Clear Completed</button>
        </form>
    )
   }

export default TodoForm
