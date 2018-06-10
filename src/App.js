import React, {Component} from 'react';
import TodoList from './TodoList';

class List extends Component {
    constructor(){
        super();
        this.state={
            title: "My ToDo List",
            newToDo: "",
            listArray: []
        };
    }

    handleListChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmitToDo = () =>{
        const listArray = this.state.listArray;
        const newToDo = { name: this.state.newToDo, id: this.state.newToDo + listArray.length };
        listArray.push(newToDo);
        this.setState({listArray: listArray, newToDo: ""});
    };

    render () {
        console.log("Render was called");
        return (
            <div>
                <h1>{this.state.title}</h1>
                
                <TodoList listArray={this.state.listArray} />
                <input
                    name="newToDo"
                    value={this.state.newToDo}
                    placeholder="add new Todo" 
                    onChange={this.handleListChange} 
                />
                <button onClick = {this.handleSubmitToDo}>Add ToDo</button>
            </div>
        );
    }
}

export default List;