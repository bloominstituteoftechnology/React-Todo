import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const taskItems = [
  {
    name: 'Give Simba a bath',
    id: 123,
    completed: false
  }
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      taskItems // supposed to be taskItems: taskItems
    };
  }

  
  addItem = (e, item) => {
    // why is prevent default on add item vs only on submit?
    e.preventDefault(); 
    
    const newItem = {
      name: item,
      id: Date.now(), 
    };
   
    this.setState({
      taskItems: [...this.state.taskItems, newItem]
    });
  };

  
  toggleItem = itemId => {
    console.log("toggle, item ID", itemId);
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

  // handle changes here also
  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // submit item
  submitItem = e => {
    e.preventDefault(); // also saw this on app.js clear purchased, why?
    this.setState({ item: '' });
    this.props.addItem(e, this.state.item);
  };


  render() {
    console.log('rendering...')
    return (
      <div className="App">
        <div className="header">
            <h2>~ Too-dah List! ~</h2>
            <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
              taskItems={this.state.taskItems}
              toggleItem={this.toggleItem}
              clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
