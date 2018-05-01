// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from 'react';
import DisplayList from './displaylist.js';


class TodoList extends Component{
    constructor(){
        super()
        this.state = {
            id: 0,
            item: "",
            toDoList: []
        } 
    }

    handleChange =(event) => {
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value });
        
    }

    submitChange = (event) => {
        console.log(event.target.value);
        const toDoList = this.state.toDoList;
        const item = {name: this.state.item, id: this.state.toDoList.length};
        toDoList.push(item);
        this.setState({toDoList: toDoList, item: ""})
        event.preventDefault();
        
    }

   

   
    render(){
        return(
            <div>
                <h1>Test</h1>
                <DisplayList toDoList={this.state.toDoList}/>
                <form>
          <input name="item" type="text" value={this.state.item} onChange={this.handleChange} />
                
                <button onClick={this.submitChange}>Submit</button>
                </form>
                
            </div>
        )
    }
}

export default TodoList