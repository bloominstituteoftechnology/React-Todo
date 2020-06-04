import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// const taskItems = [
//   {
//     name: 'Give Simba a bath',
//     id: 123,
//     completed: false
//   }
// ];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      taskItems: [{ name: 'Wash Simba', id: 123, completed: false }], form: { name: '' }
    };
  }


  addItem = (e, item) => {
    // why is prevent default on add item vs only on submit?
    e.preventDefault();
    const newItem = {
      name: item.name,
      id: Date.now(),
      completed: false
    };
    this.setState({
      taskItems: [...this.state.taskItems, newItem]
    });
  };


  toggleItem = itemId => {
    console.log("toggle item completed, item ID:", itemId);
    this.setState({
      taskItems: this.state.taskItems.map(item => {
        if (itemId === item.id) {
          return {
            ...item, completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      taskItems: this.state.taskItems.filter(item => !item.completed)
    });
  };

  handleChanges = e => {
    this.setState({ ...this.state, form: { ...this.state.form, [e.target.name]: e.target.value } });
  };

  // submit item
  submitItem = e => {
    e.preventDefault(); // also saw this on app.js clear purchased, why?
    // this.setState({ item: '' });
    this.addItem(e, this.state.form);
  };


  render() {
    console.log('rendering...')
    return (
      <div className="App">
        <div className="header">
          <h2>~ Too-dah List! ~</h2>
          <TodoForm
            addItem={this.addItem}
            formState={this.state.form} // form state and handlechanges are the only ones that need formState
            onChange={this.handleChanges}
            clearCompleted={this.clearCompleted}
            onSubmit={this.submitItem}
          />
        </div>
        <TodoList
          taskItems={this.state.taskItems}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
