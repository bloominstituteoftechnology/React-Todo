import React from 'react';
import './App.css';

import TodoLister from './TodoLister';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todoLists: [{
        id: 0
      }],
    }
  }

  handleNewTodo = () => {
    let newList = this.state.todoLists.slice();
    newList.push({ id: Date.now() });
    this.setState({ todoLists: newList });
  }

  render(){
    return(
      <div className="app-container">
        <TodoLister list={this.state.todoLists} click={this.handleNewTodo} />
      </div>
    );
  }
}

export default App;
