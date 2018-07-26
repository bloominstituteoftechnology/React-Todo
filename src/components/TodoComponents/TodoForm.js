import React from 'react';
import TodoList from './TodoList.js';
import todoArray from '../../todoArray.js';
class TodoForm extends React.Component {
    constructor(props){
        super();
        this.state ={
            list: [
                {
                    id: 'Go through neighbors garbage',
                    completed: false,
                    task: 'Go through neighbors garbage'
                }
            ],
            nuTaskVal: '',
            nuId: '',
            nuCompleted: false
        };
    }

    handleInput = (e) => {
        let nuVal = e.target.value;
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
        let list = this.state.list.slice();
        list.push(obj);
        this.setState({
            list: list
        });
        this.clearInput();
    };

    handleCompleted = (id) => {
        let nuList = this.state.list.slice();
        nuList = nuList.map((item)=>{
            if(item.id === id){
                item.completed = !item.completed;
                return item;
            } else {
                return item;
            }
        });
        this.setState({
            list : nuList
        });
    }

    removeCompleted = () => {
        let list = this.state.list.slice();
        let nuList = list.filter((elem)=>{
            if(elem.completed != true){
                return elem;
            }
        });
        this.setState({ list : nuList});
    };

    clearInput = () => {
        this.setState({
            nuTaskVal : ''
        });
    }

    render(){
        return (
            <div>
                <input className="input-field" value={this.state.nuTaskVal} placeholder="Another thing to ignore" onChange={this.handleInput} />

                <button onClick={this.createItem}>Add ToDo</button>
                <button onClick={this.removeCompleted}>Clear Selected</button>
                <TodoList tasks={this.state.list} handleCompleted={this.handleCompleted}/>
            </div>
        );
    }
   
}

export default TodoForm;