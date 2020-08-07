import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import "./components/Todo.css";


  let todos=[
    // {
    //   task: 'Laundry',
    //   id: 1,
    //   completed: false
    // },
    // {
    //   task: 'Mow the lawn',
    //   id: 2,
    //   completed: false
    // },
    // {
    //   task: 'Wash Dishes',
    //   id: 3,
    //   completed: false
    // },
    // {
    //   task: 'Take out the trash',
    //   id: 4,
    //   completed: false
    // },
    // {
    //   task: 'Clean the bathroom',
    //   id: 5,
    //   completed: false
    // },
    // {
    //   task: 'Mop',
    //   id: 6,
    //   completed: false
    // },
    // {
    //   task: 'Get Groceries',
    //   id: 7,
    //   completed: false
    // },
    // {
    //   task: 'Pay rent',
    //   id: 8,
    //   completed: false
    // },
    // {
    //   task: 'Dust the vents',
    //   id: 9,
    //   completed: false
    // }, 
    // {
    //   task: 'Wash the dog',
    //   id: 10,
    //   completed: false
    // }
  ]
;



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      todos
    }
  }

  toggleTask=taskID=>{
    // console.log(!task.completed)
    this.setState({
      todos:this.state.todos.map(task=>{
        if(taskID===task.id){
          return{
            ...task,
            completed:!task.completed
          };
        }
        // console.log(task.completed)
        return task;
      })
    });
  };

  addTask= taskName=>{
    const newTask ={
      task:taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos,newTask]
    });
  };

  clearCompleted=e=>{
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(choreStatus=>!choreStatus.completed)
    });
  };

  render() {
    return (
      <div>
        <h2>Oh boy my day off todo list...</h2>
        <TodoList 
        todos={this.state.todos} 
        toggleTask={this.toggleTask}
        // clearCompleted={this.clearCompleted}
        />
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted}/>
        
      </div>
    );
  }
}

export default App;
