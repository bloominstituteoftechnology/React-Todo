import React from 'react';
import TodoForm from './components/TodoForm';
import { TodoList } from './components/TodoList';
import './components/Todo.css';


    const todoItems= [      
      // {task: 'wash',
      // id: Date.now(),
      // completed: false}
    ];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change 
  // handlers you need to work with your state
  constructor(){
    super();
    this.state={
    todoItems
    }
    
    
  }

  addTask=((newTask)=>{
    const newTodo = {
      task: newTask,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoItems:[...this.state.todoItems,newTodo]
    })
  });

  clearCompleted=((e)=>{
    e.preventDefault();
    this.setState({todoItems:this.state.todoItems.filter(task=>!task.completed
    )
  });
})

  // handleChange=event=>{
  //   this.setState({this.state.todoItems:event.target.value})
  // };

  // handleSubmit=event=>{
  //   event.preventDefault();
    
  //   this.setState({todoItems:[...this.state.todoItems,{task:''}]})

  // };

  toggleTask=((taskId)=>{
    this.setState({todoItems:this.state.todoItems.map(task=>{
     if(taskId===task.id){
       return{...task,
      completed:!task.completed};
     }
     return task;
    })})
  });

  render(){
    console.log(this.state)
    return (
      <div>
        <h2>Terry's Todos for {Date()}</h2>
    {/* <h3>{this.state.task}</h3> */}

        <TodoForm 
        addTask={this.addTask} 
        // formSubmit={this.handleSubmit} 
        // formChange={this.handleChange} 
        // formValue={this.state.task}
        clearCompleted={this.clearCompleted}/>
        <TodoList 
        todoItems={this.state.todoItems}
        toggleTask={this.toggleTask}
        />
      </div>
    );
  }
}

export default App;
