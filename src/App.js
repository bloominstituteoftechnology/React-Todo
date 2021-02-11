import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Container, Nav, Img, Heading } from './components/Styles';

const tasks = [
  {
    name: '',
    id: Date.now(),
    completed: false,
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }

  toggleCompleted = (taskId) => {
    const newTask = this.state.tasks.map(task => {
      if (taskId === task.id) {
        return {
          ...task,
          completed: !task.completed
        }
      }
      else { return task; }
    })
    this.setState({
      ...this.state,
      tasks: newTask
    })
  }

  addTask = (taskName, evt) => {
    evt.preventDefault();
    const newTask = {
      name: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask]
    })
  }
  

  clearCompleted = () => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <Container>

        <Nav>
          <Img src='https://cdn.pixabay.com/photo/2017/08/04/07/58/list-2579306_1280.jpg'/>
        </Nav>

        <Heading>Welcome to Your To Do App!</Heading>

        <TodoForm addTask={this.addTask} />

        <TodoList 
          clearCompleted={this.clearCompleted} 
          toggleCompleted={this.toggleCompleted} 
          tasks={this.state.tasks} />
          
      </Container>
    );
  }
}

export default App;
