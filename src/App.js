import React, { Component } from 'react';
import './index.css';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      userInput: '',
      list: []
    }
  }

  changeUserInput(input){
    this.setState({
      userInput: input
    }, ()=> console.log(input))
  }
 
  addToList(input) {
    let listArray = this.state.list;

    listArray.push(input);

    this.setState({
      list: listArray,
      userInput: ''
    })
  }

  toggleClass() {
    alert('clicked')
    
  }

    render() {
      return (
        <div className="container">
        <h1 className="title">Things To Do</h1>
          <input 
          className="input"
          onChange = { (e)=> this.changeUserInput(e.target.value)}
          value={this.state.userInput} 
          type="text"
          />
          <button className="button" onClick={ ()=> this.addToList(this.state.userInput)}>Submit</button>
        
        <ul className="theList" onClick={(e) => this.toggleClass(e.target.li)}>
          {this.state.list.map( (value) => <li className="li">{value}</li>)}
        </ul>

        </div>

      )
    }
  }
  

export default App;
