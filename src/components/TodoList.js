import React, { Component } from "react";
import Todo from './Todo';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = ['Wash clothes', 'Buy Milk']
    };

 // addTask = (event) => {
    //     event.preventDefault();
    //     const addTask = this.state.tasks;
    //     TodoList.push(this.state.newTask);
    //     this.setState({
    //         newTask: '',
    //         tasks: TodoList
    //     });
    // }

    render() {
        return (
            <div className='TodoList' >
                <h2>TodoList</h2>
                {this.state.map((value, index) => 
                    <Todo key={index} 
                        value={ value} />
                )}
            </div>
        )
    }
}

export default TodoList;