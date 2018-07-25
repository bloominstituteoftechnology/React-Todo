import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      data: ['todoItem1']
    }
  }

  addTodo(props) {
    const items = this.state.data.slice();

    // items.push({
    //   task: {task},
    //   id: 434343434,
    //   completed: false
    // })
    this.setState({items: items});
  }
  
  removeTodo = event => {
    this.setState({data: event.target.value});
  }
  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList/>
      </div>
    );
  }
}

export default App;
