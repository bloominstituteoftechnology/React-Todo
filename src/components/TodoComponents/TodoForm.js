import React from 'react';
import TodoList from './TodoList.js';
import todoArray from '../../todoArray.js';
class TodoForm extends React.Component {
    constructor(props){
        super();
        this.state ={
            list: todoArray,
            taskVal: ''
        };
    }

    handleInput = (e) => {
        let nuVal = e.target.value;
        console.log(nuVal);
    };

    createItem(val){
        let nuItem = {

        }
    }


    render(){
        todoArray.push({ completed: false, task: 'House in woods' })
        return (
            <div>
                <TodoList tasks={this.state.list}/>
                <input placeholder="Another thing to ignore" onChange={this.handleInput}/>
                <button onClick={this.createItem}>Add ToDo</button>
                <button>Clear Selected</button>
            </div>
        );
    }
   
}

export default TodoForm;