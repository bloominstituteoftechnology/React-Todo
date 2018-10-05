import React from 'react';
import './App.css';
import AppContainer from './components/AppContainer/AppContainer';


class App extends React.Component {
  constructor(){
    super();

    let x = JSON.parse(localStorage.getItem('data'));
    if(!x){
      x = []
    }

    this.state = {
      newItemInput:"",
      data: x      
    }
  }


  SaveData = ()=>{
    let data = JSON.stringify(this.state.data);
    localStorage.setItem('data',data)
  }

  SetStatus(event,status){
    let data = this.state.data.map(element =>{
      if(element.id===Number(event.currentTarget.id)){
        element.completed = status;
      }
      return element; 
    })
    this.setState({data:data},this.SaveData)
  }

  ReOpenTask = event =>{
    this.SetStatus(event,false)
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
      task: this.state.newItemInput,     
      id:(Math.floor(Math.random() * 20)+extraRandom),
      completed: false
    }]},this.SaveData)

    this.setState({newItemInput: ''});
    let element = document.querySelector('.input-field')
    element.focus();

  }
  RemoveToDoItems(status)
  {
    let data = this.state.data.filter(element =>{return element.completed !==  status})
    this.setState({data: data},this.SaveData)

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
    this.setState({newItemInput: event.target.value},()=>{
    });
  }
  completeTaskHandler = event =>{
    this.SetStatus(event,true)

  }
  addItemHandler = event => {
    event.preventDefault();
    this.AddItemToArray();

  }
  render() {
    return (
      <div>
        <AppContainer 
          newItemInput={this.state.newItemInput}
          data={this.state.data} 
          addItemHandler={this.addItemHandler}
          changeHandler = {this.changeHandler}
          completeTaskHandler = {this.completeTaskHandler}
          clearToDoItem = {this.clearToDoItem}
          clearDoneItems = {this.clearDoneItems}
          onKeyPress = {this.onKeyPress}
          ReOpenTask = {this.ReOpenTask}
        />
      </div>
    );
  }
}

export default App;
