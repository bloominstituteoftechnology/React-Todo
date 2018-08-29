import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";


class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      tasks: [
        
      ],
      
      inputText: ""

    };
  }
  
  addTask = event => {
    event.preventDefault();

    this.setState({           
      tasks: [...this.state.tasks, {name: this.state.inputText, id: Date.now(), completed: false}],      
      
      inputText: "" 
    })    
  }


  handleInput = event => {
    this.setState({
      inputText: event.target.value
    })
  }
  
  clearComplete = event => {
    event.preventDefault();
    this.setState({           
      tasks: Array.from(this.state.tasks).filter(element => element.completed),      
      
      inputText: "" 
    })

  }

  addComplete = event => {
    
    console.log(event.target.id);
    console.log(this.state.tasks[0].id);
    
    event.preventDefault();        
      console.log('triggered');            
        this.setState ({
          tasks: Array.from(this.state.tasks).map(task => {
            if(Object.values(task.id) == event.target.id){
              task.completed = !task.completed
            }
          }),
          
        })
        
      
   
  }

  render() {
    

    return (
      
      <div>
        
        <TodoList tasks={this.state.tasks} id = {this.state.ids} addComplete = {this.addComplete}/>
        <TodoForm 
          addTask = {this.addTask}
          inputText = {this.state.inputText}
          handleInput = {this.handleInput}        
        />
      </div>
    );
  }
}

export default App;
