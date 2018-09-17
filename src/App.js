import React, { Component  } from "react";
import LambdaLogo from "./components/lambdalogo.png";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : [],
            todo: '',
            id: null,
            completed: false,
        
    }
    this.handleChange = this.handleChange.bind();
    this.handleSubmit = this.handleSubmit.bind();
    }

    handleChange = (event) => {
        return this.setState({[event.target.name]:event.target.value});

    }

    handleSubmit = (event) => {
        const tasks = this.state.todos.slice(); //slice creates a copy of the array so we don't mutate the original
        tasks.push(this.state.todo);
        this.setState({todos:tasks, todo: ''});
    }

    handleToggle(){
        //toggles a todo strikeout when done

    }

    handleRemove(todoId) {
        //deletes todo from state
        // const tasks = this.state.tasks.map((task) => {
        //     if (taskId===this.state.id){
        //         this.state.completed = !this.state.completed
        //     }
        //     return {task}
    }
    render() {
        return (
            <div>
                <div className="header-container">
                <img className="lambda"src={LambdaLogo} alt="lambda-logo"/>
                <h1 className="app-name">To Do List</h1>
            </div>
            <div className="form-submit">
                <input name = "todo" onChange = {this.handleChange} value = {this.state.todo} />
                <button className = "submit-button" onClick = {this.handleSubmit}>Submit Task</button>
            </div>
            <ul className="task-list">
                <div className="task-list">
                {this.state.todos.map(item => {
                    return (
                        <div key={item + item.id} className="task-list">
                            <li>
                            {item} 
                            </li>
                        </div>
                    )
                })}    
                    
                    
                </div>     
            </ul>
            </div>
        );
    }
}

export default App;