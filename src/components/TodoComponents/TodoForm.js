import React from 'react';
import TodoList from './TodoList.js';
import todoArray from '../../todoArray.js';
class TodoForm extends React.Component {
    constructor(props){
        super();
        this.state ={
            list: todoArray,
            nuTaskVal: '',
            nuId: '',
            nuCompleted: false
        };
        console.log(this.state.list);
        
        
    }

    handleInput = (e) => {
        let nuVal = e.target.value;
        let list = this.state.list.splice();
        this.setState({
            nuTaskVal: nuVal,
            nuId: nuVal
        });
    };

    createItem = () =>{
        let nuItem = {
            id: this.state.nuId,
            completed: false,
            task: this.state.nuTaskVal
        };
        this.pushToList(nuItem);
    };

    pushToList = (obj) => {
        todoArray.push(obj);
        console.log(todoArray);
        this.setState({
            list: todoArray
        });
        this.clearInput();
    };

    handleCompleted = (id) => {
        let nuList = this.state.list.slice();
        nuList = nuList.map((item)=>{
            if(item.id === id){
                item.completed = !item.completed;
                console.log(item);
                
                return item;
            } else {
                return item;
            }
        });
        this.setState({
            list : nuList
        });
    }

    clearInput = () => {
        this.setState({
            nuTaskVal : ''
        });
    }

    render(){
        return (
            <div>
                <TodoList tasks={this.state.list} handleCompleted={this.handleCompleted}/>

                <input className="input-field" value={this.state.nuTaskVal} placeholder="Another thing to ignore" onChange={this.handleInput}/>

                <button onClick={this.createItem}>Add ToDo</button>
                <button>Clear Selected</button>
            </div>
        );
    }
   
}

export default TodoForm;