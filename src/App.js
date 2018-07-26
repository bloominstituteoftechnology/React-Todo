import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor (props) {
    super(props);
    this.state={todoList: [],
    textBoxString:"",
    display:[]
  }; 
  }
  writeToLS = () =>{
    localStorage.setItem('taskList', JSON.stringify(this.state.todoList));
  }
  readLS = () =>{
    
      let output = JSON.parse(localStorage.getItem('taskList'));
      this.setState({ todoList: output, display: output });
  
    
   
  }
  addToList = (event) => {
    if (this.state.textBoxString ===''){
      return;
    }
    const todoListCopy = this.state.todoList;
    const inputBox = this.state.textBoxString;
    todoListCopy.push({
      task: inputBox , 
      id: Date.now(), 
      completed: false
    })
    document.getElementById('todoInput').value = '';
    this.setState({ todoList: todoListCopy, textBoxString:"",display: todoListCopy },()=>{
      this.writeToLS();
    });
  };

  clearComplete= () =>{
    const todoListCopy = this.state.todoList;
    let recopy = todoListCopy.filter(element =>{
      if (element.completed === false) {
        return true;
      }
      else{
        return false;
      }
    })

    this.setState({ todoList: recopy , display: recopy },()=>{
      this.writeToLS();
    });
    


  };

  complete = (event) =>{
    const todoListCopy = this.state.todoList;
    // event.target.classList.toggle('complete');
    let recopy = todoListCopy.map(element => {
      if(element.id.toString() === event.target.id && element.completed === false){
        element['completed'] = true;
      }
      else if(element.id.toString() === event.target.id && element.completed === true){
        element['completed'] = false;

      }

      return element;
    });
    this.setState({ todoList: recopy, display: recopy },()=>{
      this.writeToLS();
    });

  }
  
  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.addToList();
    }

    this.setState({ textBoxString: event.target.value },()=>{
      this.search();
    });

  }
  componentDidMount(){
    
    document.title = "Hey Look a React Todo App";
    if(localStorage.getItem("taskList")===null){
      
      localStorage.setItem('taskList', '[]');
    }
    else{
      this.readLS();
    }
  }

  search(){
    const todoListCopy = this.state.todoList;
    
    let recopy = todoListCopy.filter(x => { if(x.task.toLowerCase().includes(this.state.textBoxString.toLowerCase())){
      return true;
    }
    else{
      return false;
    }
      // x.task.toLowerCase().includes(this.textBoxString.toLowerCase())
    })

    this.setState({ display: recopy },()=>{
      ;
    });
  }
  
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="container">
        <h3>What you're putting off:</h3>
        <div className="todoListContainer">
        <TodoList methods={this.complete} array={this.state.display} />
        </div>
        <TodoForm methods={[this.addToList, this.handleKeyPress, this.clearComplete]} />
      </div>
    );
  }
}

export default App;
