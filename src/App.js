import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from "./components/TodoComponents/TodoForm";

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
        todoText: ''
      };
    }
    addNewTodo = event => {
        event.preventDefault();
        this.setState({
          todoData: [
            ...this.state.todoData,
            { task: this.state.todoText }
          ],
          todoText: ''
        });
    };
    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    render() {
        return (
          <div className="App">
            <TodoList

              todoData={this.state.todoData}            
            />
            <TodoForm 
              addNewTodo={this.addNewTodo}
              changeHandler={this.changeHandler}
              todoText={this.state.todoText}
              newTodo={this.state.newTodo}
            />

          </div>
        );
    }
}

const rootElement = document.getElementById('root');
export default App
