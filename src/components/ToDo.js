import React , { Component } from 'react'

import ToDoList from './ToDoList';

class ToDo extends Component{
    constructor(){
        super();
        this.state = {
            char: '',
            tasks: [],
            checked: false,
            index: 1
        };
    }

    handleTaskChange = event => {
        this.setState({[event.target.name] : event.target.value});
    } 

    handleSubmit = () => {
        const tt = this.state.tasks;
        const char = {
            name : this.state.char,
            bool: false,
            id: this.state.char +  tt.length // why id?
        }
        tt.push(char);
        this.setState({
            tasks: tt,
            char: ''
        })
    }


    render(){
        return(
            <div>
                < ToDoList boo = {this.state.tasks} />

                <input 
                    name = "char"
                    onChange={this.handleTaskChange}
                    value= {this.state.char}
                    placeholder= "todos"
                />

                <button onClick={this.handleSubmit}>Add Char</button>
            </div>
            
        )
    }

}


export default ToDo;

//why do we need a default