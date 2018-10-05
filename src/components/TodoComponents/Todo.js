import React from 'react';
import './Todo.css';

const Todo = props => {
    return <div>
        <form onSubmit={props.addToList}>
          <input type="text" placeholder="what to do?" onChange={props.changeHandler} value={props.todoItem} />
          <button className="addbutton" type="submit" onClick={props.addToList}>
            ADD
          </button>
        </form>
        <button className="clrbutton" type="text" onClick={props.clearList}>
          CLEAR
        </button>
        <button className="clrdone" type="text" onClick={props.clearDone}>
          CLEAR DONE
        </button>
      </div>;
}

export default Todo;