import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './App.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: [
        // {
        //   task: '...todo',
        //   id: Date.now(),
        //   completed: false
        // }
      ], 

      inputText: ''
    };
  }

  componentDidMount(){
    const storedTodo = JSON.parse(localStorage.getItem('todo'));
    if (storedTodo){
      this.setState({tasks: storedTodo})
    } 
  }

  componentDidUpdate(){
    localStorage.setItem('todo', JSON.stringify(this.state.tasks));
  }


  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });
    
  };

  handleAddTodo = event => {
    event.preventDefault();
    // create a new array with:
    // 1 - all the old data in the old array (Hint: use the spread operator)
    // 2 - the new character from this.state.inputText
    
    let newTasks = [...this.state.tasks,
      { task: this.state.inputText, id: Date.now(),  completed: false }];
    

    this.setState({
      tasks: newTasks,
      inputText: ''
    });
    
  };

  
  changeStyle = id => {
  
    // 1. loop through tasks
    // 2. look at each todo task to see if it's the one we clicked on
    // 3. if we are looking at the todo task we clicked on, we will
    //    change the task's style to crossed trough, then return the updated obj
    // 4. else we will return the character object unchanged
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: task.completed === false ? true : false
          };
        } else {
          return task;
        }
      })
    });
  };

  clearCompleted = ev => {
    ev.preventDefault();
    // this.setState({
    //   tasks: this.state.tasks.filter(
    //     task => task.completed === false
    //   )
    // });
    const newList = this.state.tasks.filter(todo => todo.completed === false);

    this.setState({tasks: newList});
    
  };


  render() {
    return (
      <div className="App">
        <TodoList todoList={this.state.tasks} changeStyle={this.changeStyle}/>
        <TodoForm handleChange={this.handleChange} handleAddTodo={this.handleAddTodo} inputText={this.state.inputText} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
