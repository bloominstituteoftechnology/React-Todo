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
      items: [
        {
          task: "Learn setState()",
          key: Date.now(),
          completed: false
        },
        {
          task: "Style my Todo List",
          key: Date.now(),
          completed: false
        }
      ],
      item: ""
    };
  }

  handleChange = e => {
    this.setState({item: e.target.value});
  };

  addItem = () => {
    const items = this.state.items;
    items.push(this.state.item);
    this.setState({items, item: ""});
  }

  render() {
    return (
      <div>
        {/* <h2>Welcome to your Todo App!</h2> */}
        <h1>{this.state.title}</h1>
        <TodoForm />
      </div>
    );
  }
}

export default App;
