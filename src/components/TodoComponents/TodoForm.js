import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <div>
         <form>
           <input type="text" placeholder="What to do?" />
           <button className="add-button">Add Todo</button>
           <button className="clear-button">Clear Todos</button>
         </form>
       </div>
    );
  }
}

export default TodoForm;