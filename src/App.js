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
      listItems: [
        {
          task: "Learn setState()",
          key: 1529011020237,
          completed: false
        },
        {
          task: "Style my Todo List",
          key: 1529011020238,
          completed: false
        }
      ],
      item: ""
    };
  }

  handleChange = e => {
    this.setState({ item: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      task: this.state.item,
      key: Date.now(),
      completed: false
    };

    let listItems = this.state.listItems.slice();
    listItems.push(newItem);
    this.setState({ listItems, item: "" });
  }

  handleCompleted = e => {
    let listItems = this.state.listItems.slice();
    listItems = listItems.map(item => {
      if(item.key === e) {
        item.completed = !item.completed;
      }
      return item;
    });
    this.setState({listItems});
  }
  
  handleClear = e => {
    let listItems = this.state.listItems.slice();
    listItems = listItems.filter((item) => { return item.completed === false });
    this.setState({listItems});
  }

  render() {
    return (
      <div className="app">
        {/* <h2>Welcome to your Todo App!</h2> */}
        <h1>{this.state.title}</h1>
        <TodoForm
          listItems={this.state.listItems}
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleClear={this.handleClear}
          handleCompleted={this.handleCompleted}
        />
      </div>
    );
  }
}

export default App;