import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Header from './components/Header';
import styled from 'styled-components';

import './components/Todo.css';

const data = [
  {
    task: "chores",
    id: 12345,
    completed: false
  },
  {
    task: "chores2",
    id: 123456,
    completed: false
  },
  {
    task: "chores3",
    id: 1234567,
    completed: false
  },

];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {data}
  }

  addTodo = task => {
    this.setState({
      data: [...this.state.data, {task: task, id: Date.now(), completed: false}]
    });
  }

  toggleComplete = id => {
    this.setState({
      data: this.state.data.map(item => {
        if (id.id === item.id) {
          console.log(data);
          return({
            ...item,
            completed: !item.completed
          });
        } else {
          return(item);
        }
      })
    })
  }

  handleCompleted = () => {
    console.log(data);
    this.setState({
      data: this.state.data.filter(item => (!item.completed))
    });
  }

  render() {
    return (
      <div>
        <MainContain>
          <Header />
          <TodoList list={this.state.data} toggleComplete={this.toggleComplete} handleCompleted={this.handleCompleted} />
          <TodoForm addTodo={this.addTodo}  />
        </MainContain>
      </div>
    );
  }
}

export default App;

const MainContain = styled.div`
width: 40%;
margin: auto;
color: white;
font-weight: bold;
text-align: center;
`