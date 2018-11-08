import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const listItems = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: listItems,
      inputText: '',   
    }
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addItem = event => {
    event.preventDefault();
    this.setState({
      list: [
        ...this.state.list,
        { task: this.state.inputText }
      ],
      inputText: ''
    });
  };
  

  render() {
    return (
      <main>
        <TodoForm 
        addItem={this.addItem}
        inputText={this.state.inputText}
        handleChange={this.handleChange}
        />
        <TodoList list={this.state.list}/>
      </main>
    );
  }
}

export default App;
