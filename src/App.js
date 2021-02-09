import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
const todo=[
  {
    task: 'Learn React',
    id:1,
    completed: false
  },
  {
    task:'workout',
    id:2,
    completed:false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      todo
    }
  }
  handleToggle=(itemId) =>{
    this.setState({
      todo: this.state.todo.map(item=>{
        if (item.id === itemId){
          return{
            ...item,
            completed: !item.completed
          }
        }
        return(item)
      })
    })
  }
  AddTodo=(todoTask)=>{
    const newTodo ={
      task: todoTask,
      id: Date.now(),
      completed: false
    };
    const newerTodo = [...this.state.todo, newTodo];

    this.setState({
      todo: newerTodo
    })
  }
  handleTaskCompleted = () => {
    const newTask = this.state.todo.filter(item =>{
      return(!item.completed);
    });
    this.setState({
      todo: newTask
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo} handleToggle={this.handleToggle} handleTaskCompleted={this.handleTaskCompleted}/>
        <TodoForm  AddTodo={this.AddTodo}/>
      </div>
    );
  }
}

export default App;
