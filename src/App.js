import React from 'react';
import Data from './components/TodoComponents/tasks';
import Tasks from './components/TodoComponents/TodoList';
import FormToDo from './components/TodoComponents/TodoForm';
import './app.css';
import SearchBar from './components/TodoComponents/Search';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      listData: Data
    }
  }

  addItem = (event,itemName) => {
    const newItem = {
      id: Date.now(),
      task: itemName,
      completed: false
    }

    this.setState({
      listData: [...this.state.listData, newItem]
    })

  }

  searchItems = (value) => {
    if(value !== ''){
      this.setState({
        // filter out all groceries that are purchased
        listData: this.state.listData.filter(item => {
          // this is the same as:
          // item.purchased === false
          const loweritem = item.task.toLowerCase();
          if(loweritem.includes(value.toLowerCase())){
            return item;
          }
        })
      })
    }
    else{
      this.setState({
        listData: Data
      })
    }
  }

  clearPurchased = event => {
    event.preventDefault()

    this.setState({
      listData: Data
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <SearchBar searchItems={this.searchItems} />
        {this.state.listData.map(item => (
          <Tasks key={item.id} name={item.task} completed={item.completed} />
        ))}
        <div className="flexRow">
          <FormToDo addItem={this.addItem} />
          <button onClick={this.clearPurchased}>Clear Purchased</button>
        </div>
      </div>
    );
  }
}

export default App;
