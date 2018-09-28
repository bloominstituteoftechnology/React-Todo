import React from 'react';
import './Todo.css';
import { Button } from 'carbon-components-react';

const TodoForm = (props) => {
    return (
      <div>
          <form>
            <input placeholder="...todo" />
            <Button onClick={props.submit}>🖊️ Add Todo</Button>
            <Button className="clear" onClick={props.removeComplete}>🗑️ Clear Completed</Button>
          </form>
      </div>
    )
  }

  export default TodoForm;