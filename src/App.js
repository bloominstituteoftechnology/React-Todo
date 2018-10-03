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
    
    this.setState({data: [...this.state.data,{
      task: this.newItemInput,
      id:Math.floor(Math.random() * 20),
      completed: false
    }]})

    document.querySelector('.input-field').value = '';
    
  }


  render() {
    return (
      <div>
        <AppContainer 
          data={this.state.data} 
          addItemHandler={this.addItemHandler}
          changeHandler = {this.changeHandler}
          completeTaskHandler = {this.completeTaskHandler}
        />
      </div>
    );
  }
}

export default App;
