import React from 'react';

import Todo from './Todo';
import TodoList from './TodoList';

class TodoForm  extends React.Component {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased)
constructor(){
    super();
    this.state = {
        item: ''
    };
}

handleChanges = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
}



render() {
  return (
    <form onSubmit={``}>
    <input
      type="text"
      value={this.state.item}
      name="item"
      onChange={this.handleChanges}
    />
    <button>Add</button>
  </form>
  );
};
}

export default TodoForm;
