import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      lists: [],
      input: "",
    };
  }
  
  inputChange = event => {
    this.setState({input: event.target.value})
  };

  addItem = () => {
    const lists = this.state.lists.slice();
    lists.push({
      id: Date.now(),
      task: this.state.input,
      complete: false,
    });
    this.setState({lists: lists});
    this.setState({input: ""})
  };

  addItemEnter = (e) => {
    if (e.key === 'Enter') {
    const lists = this.state.lists.slice();
    lists.push({
      id: Date.now(),
      task: this.state.input,
      complete: false,
    });
    this.setState({lists: lists});
    this.setState({input: ""})
    }
  };

  strike = (id) => {
    let lists = this.state.lists.slice();
    lists.map(item => {
      if (item.id === id){
        item.complete = !item.complete;
        return item;
      } else {
        return item;
      }
    })
    this.setState({lists: lists})
  };

  done = (event) => {
   
    event.preventDefault();
    let lists = this.state.lists.slice();
    lists.filter(item => !item.complete);
    this.setState({lists: lists})
  };

  render() {
    return (
      <div>
        <h1>Todo List:</h1>
        <h2><TodoList strike={this.strike} arrayprop={this.state.lists}/></h2>
       <TodoForm thisprop={this}/>
      </div>
    );
  }
}

export default App;
