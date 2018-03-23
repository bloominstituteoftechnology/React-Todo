import React, { Component } from "react";
import Todo from './Todo';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = ['Wash clothes', 'Buy Milk']
    };

 addTask = (event) => {
        event.preventDefault();
        const TodoList = this.state.tasks;
        TodoList.push(this.state.newTask);
        this.setState({
            newTask: '',
            tasks: TodoList
        });
    }

handleTaskInput = (event) => {
    this.setState({ newTask: event.target.value});
};

    render() {
        return (
            <div className='TodoList' >
                <h2>TodoList</h2>
                {this.state.map((value, i) => <Todo key={i} value={value} />
                )}

                <form onSubmit={this.addTask}>
                    <input type='text'
                    onChange={this.handleTaskInput}
                    placeholder="Add new task"
                    value={this.state.newTask}/>
                    </form>
            </div>
        );
    }
}

export default TodoList;