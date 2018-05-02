// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, {Component} from 'react';
import DisplayList from './displaylist';
import List from './list';

class TodoList extends Component {
    constructor() {
        super()
        this.state = {
          id: 1,  
          item: '',        
          toDoList: []
        }
    }

    handleChange = (event) => {        
      this.setState({[event.target.name]: event.target.value})     
    }

    submitChange = (event) => {
    console.log()
        const toDoList = this.state.toDoList;
        const item = {name: this.state.item, id: this.state.toDoList.length}
        toDoList.push(item);
        this.setState({toDoList: toDoList, item : ''});        
    }

  render() {
      return (
          <div className="container">
          <h1>My to do list.</h1>
          <List hold={this.state.toDoList} />
              <DisplayList toDoList={this.state.toDoList} /> 
              <input name="item" type="text" value={this.state.item} onChange={this.handleChange} placeholder="Add to List" />            
              <button onClick={this.submitChange}>Add Item</button>
               </div>
      )
  }
    
}

export default TodoList;
