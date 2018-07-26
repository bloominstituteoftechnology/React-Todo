import React from 'react';
// import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';
import Search from './components/TodoComponents/Search';
import SimpleStorage from "react-simple-storage"; 
import './app.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(){
    super();
    this.state = {thingsToDo: [], temp: "",  completed: {}, searchText: "" };
  }

  handleChange = event => {
    this.setState(
      {temp: event.target.value}
    )
  }


  handleSearchChange = event => {
    
    console.log(this.state.searchText.toLowerCase()); 
    const prevThingsToDo = this.state.thingsToDo.slice(); 
    const thingsToDo = this.state.thingsToDo.slice(); 
    thingsToDo.filter( thing => {
      thing.task.toLowerCase().search(this.state.searchText.toLowerCase()) !== -1;
    });
    
    this.setState({thingsToDo: thingsToDo}); 

    this.setState(
      {searchText: event.target.value}
    );
    if(this.state.searchText === ""){
      this.setState({thingsToDo: prevThingsToDo}); 
    }
  }


  handleEnter = event => {
    const {thingsToDo} = this.state;
    let count = this.state.count;
    let key = this.state.key;  
    if(event.keyCode === 13 ){ 
      thingsToDo.push({task: this.state.temp, id: Date.now(), completed: false})
      this.setState({thingsToDo:thingsToDo, temp: "", count: count, key: key});
    }

  }

  handleClick = event => {
    
    const {thingsToDo} = this.state;
    thingsToDo.push({task: this.state.temp, id: Date.now(), completed: false});
    this.setState({thingsToDo:thingsToDo, temp: ""});
  }

  handleLiClick = event => {
    let thingsToDo = this.state.thingsToDo; 
    thingsToDo.forEach( thing => {
      if (thing.task === event.target.innerHTML && thing.completed === false){
        thing.completed = true; 
        event.target.className = "completed";
        
      } else if (thing.task === event.target.innerHTML && thing.completed === true){
        thing.completed = false;
        event.target.className = "unCompleted"; 
      }
      
    });
    this.setState({thingsToDo: thingsToDo});
    
     
}

  handleClearClick = () => {
    let thingsToDo = this.state.thingsToDo 
    thingsToDo = thingsToDo.filter( thing => thing.completed === false );
    
    this.setState({thingsToDo: thingsToDo}); 
  }


  render() {
    let filteredThings = this.state.thingsToDo.filter((thing) => {return thing.task.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1} ); 
    return (
      <div className = "appContainer">
        <SimpleStorage parent={this} />
        <h1>Todo List: MVP</h1>
        
        <ul>  
        {/* //this.state.thingsToDo  */}
          {filteredThings.map(thing => <TodoList thingToDo = {thing.task} handleLiClick = {this.handleLiClick} completed ={thing.completed}
          key={thing.id} /> )}
          {this.state.temp}
        </ul>
        <Todo handleClick = {this.handleClick} handleenter = {this.handleEnter} value={this.state.temp}
         onChange={this.handleChange}  handleClearClick = {this.handleClearClick} 
         />
        <Search onChange={this.handleSearchChange} value={this.state.searchText}/>
        
      </div>
    );
  }
}

export default App;
