import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      tasks: [
        
      ],      
      inputText: "",
      inputTextSearch: "",

    };
  }
  
  addTask = event => {
    event.preventDefault();
    if (this.state.inputText.replace(/\s+/, "")) {
      this.setState({           
      tasks: [...this.state.tasks, {name: this.state.inputText, id: Date.now(), completed: false}],            
      inputText: ""       
    })   
    }else {
      alert("Nothing was typed")
      this.setState({          
        inputTextSearch: "" 
      })
    }   
  }

  searchTask = event => {
    event.preventDefault();
    let tasks = Array.from(this.state.tasks).filter(task => task.name.indexOf(this.state.inputTextSearch) !== -1);  
     
    // this.setState({          
    //   tasks: tasks,          
    //   inputTextSearch: "" 
    // })
    // console.log(!tasks.name);

    if (!this.state.inputTextSearch.replace(/\s+/, "")) {
      alert("Nothing was typed")
      this.setState({          
        inputTextSearch: "" 
      })
    }else if (tasks.length === 0) {
      alert(`${this.state.inputTextSearch} was not found`)
      this.setState({          
        inputTextSearch: "" 
      })

    }else{
      this.setState({          
      tasks: tasks,          
      inputTextSearch: "" 
    })
    alert(`${this.state.inputTextSearch} found. ${tasks.length} results`)
    }   
  }


  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  clearComplete = event => {
    event.preventDefault();
    this.setState({          
      tasks: Array.from(this.state.tasks).filter(element => !element.completed),    
      
      inputText: "" 
    })

  }

  addComplete = event => {   
    event.preventDefault();  
    let tasks = (this.state.tasks).map(task => {
      if (task.id == event.target.id ) {
        event.target.classList.toggle("complete")       
        task.completed = !task.completed      
        return task   
      }else{        
        return task
      }
    })

    this.setState({
      tasks: tasks
    })     
    }
    

  render() {
    

    return (
      <div className= "container">
        <div>
          <h1>TODO LIST</h1>
          <TodoList tasks={this.state.tasks} id = {this.state.ids} addComplete = {this.addComplete}/>
          <TodoForm 
            inputText = {this.state.inputText}
            inputTextSearch = {this.state.inputTextSearch}
            addTask = {this.addTask}
            searchTask = {this.searchTask}
            handleInput = {this.handleInput}       
            clearComplete = {this.clearComplete} 
          />
        </div>
      </div>       
      
    );
  }
}

export default App;
