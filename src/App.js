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
    let x = JSON.stringify(this.state.data);
    console.log('about to save the array - ',x)
    localStorage.setItem('data',x)
  }

  SetStatus(event,status){
    console.log('event.current id ', event.currentTarget.id)
    this.setState({data:[...this.state.data.map(element =>{
      if(element.id===Number(event.currentTarget.id)){
        element.completed = status;
      }
      return element; 
    })]},this.SaveData)
  }

  ReOpenTask = event =>{
    console.log('calling?')
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

    let element = document.querySelector('.input-field')
    element.value = '';
    element.focus();

  }
  RemoveToDoItems(status)
  {
    //console.log('x before - ', x)

    let x = [...this.state.data.filter(element =>{
      console.log('comparing ', element.completed, ' to ', status)
      return element.completed !==  status})]

    console.log('x after - ', x)
    
     this.setState({data: x},this.SaveData)

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
    console.log('state.data = ', this.state.data)
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
          ReOpenTask = {this.ReOpenTask}
        />
      </div>
    );
  }
}

export default App;
