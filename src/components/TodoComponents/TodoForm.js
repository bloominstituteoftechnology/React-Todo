import React from 'react';
import TodoList from './TodoList.js';
import todoArray from '../../todoArray.js';
class TodoForm extends React.Component {
    constructor(props){
        super();
        this.state ={
            list: todoArray,
            nuTaskVal: ''
        };
    }

    handleInput = (e) => {
        let nuVal = e.target.value;
        this.setState({
            nuTaskVal: nuVal
        });
    };

    createItem = () =>{
        let nuItem = {
            completed: false,
            task: this.state.nuTaskVal
        };
        this.pushToList(nuItem);
    }

    pushToList = (obj) => {
        todoArray.push(obj);
        console.log(todoArray);
        this.setState({
            list: todoArray
        });
        this.clearInput();
    };

    clearInput = () => {
        this.setState({
            nuTaskVal : ''
        });
    }

    render(){
        return (
            <div>
                <TodoList tasks={this.state.list}/>
                <input className="input-field" value={this.state.nuTaskVal} placeholder="Another thing to ignore" onChange={this.handleInput}/>
                <button onClick={this.createItem}>Add ToDo</button>
                <button>Clear Selected</button>
            </div>
        );
    }
   
}

export default TodoForm;