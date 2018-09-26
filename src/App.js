import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(){
    super();
    this.state = {todo: [], doing: ''}
  }
  handleInputChange = event => {
    this.setState({doing: event.target.value});
  }

  addTodo = (prevState) => {
    let changedList =this.state.todo.slice();
    let newItem = {task: this.state.current, id: Date.now(), completed: false};
    changedList.push(newItem);
    this.setState({todo: changedList, doing:''})
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <TodoList list={this.state.todo} onChange={this.handleInputChange} onSubmit={this.addTodo} />
    );
  }
}

export default App;
