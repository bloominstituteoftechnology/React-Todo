import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props) {
    super(props);
    this.state = {
      title: "Todo List: MVP",
      items: [],
      item: ""
    };
  }

  changeTitleHandler = event => {
    this.setState({item: event.target.value});
  };

  addTodo = () => {
    const items = this.state.items.slice();
    items.push(this.state.item);
    this.setState({items: items, item: ""});
  }

  render() {
    return (
      <div>
        {/* <h2>Welcome to your Todo App!</h2> */}
        <TodoForm />
      </div>
    );
  }
}

export default App;
