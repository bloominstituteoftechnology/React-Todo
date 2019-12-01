import React from 'react';
import ToDoList from "./components/TodoComponents/TodoList";
import ToDoForm from "./components/TodoComponents/TodoForm";
import styled from "styled-components";


const AppDiv = styled.div`
  background: #708090;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  height: 55em;
  max-width: 50em;
  margin: 16px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
const ClearButton = styled.button`
  background: #A4A89F;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
  font-size: 1em;
  max-width: 75%;
  width: 10em
  padding: 10px;
  margin-left: 2.5%;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Wake Up',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Eat Breakfast',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    };
  }
  addToDo = event => {
    event.preventDefault();
    const newTodo =
      this.state.todos.push({ task: this.state.todo, completed: false, id: Date.now() })
    this.setState({ newTodo })
  };

  changeTodo = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    const todos = this.state.todos;
    todos.push({ task: this.state.todo, completed: false, id: Date.now() });
    this.setState({ todos, todo: '' });
  };

  toggleCompleted = id => {
    let completedTodos =
      this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
          return todo;
        } else {
          return todo;
        }
      })
    this.setState({ completedTodos })
  }

  clearCompletedTodos = event => {
    event.preventDefault();
    let incompleteTodos = this.state.todos.filter(todo => todo.completed === false)
    this.setState({ todos: incompleteTodos })
  }

  render() {
    return (
      <AppDiv>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddtodo={this.addToDo}
          submitHandler={this.submitHandler}
          handleClearTodos={this.clearCompletedTodos}

        />
        <ToDoList
          todos={this.state.todos}
          handleToggleCompleted={this.toggleCompleted}
        />
        <ClearButton
          onClick={this.clearCompletedTodos}

        >Clear Completed</ClearButton>
      </AppDiv>
    );
  }
}

export default App;
