import React from 'react';
import './App.css';
import AppContainer from './components/AppContainer/AppContainer';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      newItemInput:"",
      data: []      
    }
  }

  onKeyPress = event =>{
    if(event.which === 13)
    {
      this.AddItemToArray();
    }
  }

  AddItemToArray(){
    let extraRandom = Date.now();
    this.setState({data: [...this.state.data,{
      task: this.newItemInput,     
      id:(Math.floor(Math.random() * 20)+extraRandom),
      completed: false
    }]})

    document.querySelector('.input-field').value = '';

  }
  RemoveToDoItems(status)
  {
    this.setState({data: [...this.state.data.map(element => {
      if(element.completed !== status){
        return element;
      }
      return '';

    })]})

  }
  clearDoneItems = event =>{
    event.preventDefault();
    this.RemoveToDoItems(true);
  }
  clearToDoItem = event =>{
    event.preventDefault();
    this.RemoveToDoItems(false);
  }
  changeHandler = event =>{
    this.newItemInput = event.target.value;
  }
  completeTaskHandler = event =>{

    this.setState({data:[...this.state.data.map(element =>{
         if(element.id===Number(event.currentTarget.id)){
           element.completed = true;
         }
         return element; 
    })]})
  }
  addItemHandler = event => {
    event.preventDefault();
    this.AddItemToArray();

  }
  render() {
    return (
      <div>
        <AppContainer 
          data={this.state.data} 
          addItemHandler={this.addItemHandler}
          changeHandler = {this.changeHandler}
          completeTaskHandler = {this.completeTaskHandler}
          clearToDoItem = {this.clearToDoItem}
          clearDoneItems = {this.clearDoneItems}
          onKeyPress = {this.onKeyPress}
        />
      </div>
    );
  }
}

export default App;
