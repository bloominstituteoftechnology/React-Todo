import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todoData: [
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
          ],
        todoText: '',
        newTodo: ''
      };
    }
    addNewTodo = event => {
        event.preventDefault();
        this.setState({
          todoData: [
            ...this.state.todoData,
            { task: this.state.newTodo }
          ],
          newTodo: ''
        });
    };
    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    render() {
        return (
          <div className="App">
            <TodoList
              // addNewTodo={this.addNewTodo}
              // changeHandler={this.changeHandler}
              todoData={this.state.todoData}
              // todoText={this.state.todoText}
              // newTodo={this.state.newTodo}
            />

          </div>
        );
    }
}

const rootElement = document.getElementById('root');
export default App
