import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = { list: [
        {item: 'walk dog',
         id: Date.now(),
         complete: false},
        {item: 'dishes',
         id: Date.now(),
         complete: false},
        {item: 'laundry',
         id: Date.now(),
         complete: false}
      ],
      newItem: '',
      newThing: 1 

      }

  }

  changeHandler = event => {
    this.setState({newItem: event.target.value})
    this.setState({newthing: this.state.newThing += 1}) 
    console.log(this.state.newThing);
  }

  addItem = (event) => {
    event.preventDefault();
    this.setState( {
        list: [
        ...this.state.list,
        {item: this.state.newItem, id: Date.now(), complete: false}
        ], newItem: ''
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.list} />
        <Todo />
        <TodoForm
          newItem={this.state.newItem}
          changeHandler={this.changeHandler}
          addItem={this.addItem}
        />
      </div>
    )
  }
}

export default App;
