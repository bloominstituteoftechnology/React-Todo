import React, { Component  } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { Form as ToDoForm}  from "./components/Form";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : [{todo:"Wash the car", completed:false, id: 1537243322831, subtasks:[{subtask: "Wax the car", completed:false, id:1537243322921}]}],
            todo: '',
            subtask: '',
            id: null,
            completed: false,
        
        }
    }

    handleChange = (event) => {
        return this.setState({[event.target.name]:event.target.value});

    }

    handleSubmit = (event) => {
        event.preventDefault();
        const tasks = this.state.todos.slice(); //slice creates a copy of the array so we don't mutate the original
        tasks.push({todo: this.state.todo, completed:false, id: Date.now()});
        this.setState({todos:tasks, todo: ''});
    }


    handleToggle = (id) =>{
        //toggles a todo strikeout when done
        let todos =this.state.todos.slice();
            todos = todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                    console.log(todo.completed);
                    return todo;
                } 
                else {
                    return todo;
                }
            });
        this.setState({ todos });
    }
    

    handleRemove = (todoId) => {
        let todos = this.state.todos.slice();
        todos = todos.filter(todo => !todo.completed);
        this.setState({ todos });
    }
    // render() {
    //     return (
    //         <div>
    //             <div className="header-container">
    //             <img className="lambda"src={LambdaLogo} alt="lambda-logo"/>
    //             <h1 className="app-name">To Do List</h1>
    //         </div>
    //         <div className="form-submit">
    //             <input name = "todo" onChange = {this.handleChange} value = {this.state.todo} />
    //             <button className = "submit-button" onClick = {this.handleSubmit}>Submit Task</button>
    //         </div>
    //         <ul className="task-list">
    //             <div className="task-list">
    //             {this.state.todos.map(item => {
    //                 return (
    //                     <div key={item + item.id} className="task-list">
    //                         <li onClick={this.handleToggle}>
    //                         {item} 
    //                         </li>
    //                     </div>
    //                 )
    //             })}    
                    
                    
    //             </div>     
    //         </ul>
    //         </div>
    //     );
    // }

    render() {
        return (
                <div>
                    <Header />
                    <ToDoForm
                        value={this.state.todo}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        handleRemove={this.handleRemove}
                        handleSubtask={this.handleSubtask}
                    />
                    <ToDoList 
                    handleToggle={this.handleToggle}
                    handleSubtask={this.handleSubtask}
                    todos={this.state.todos}
                    subtasks={this.state.todos.subtasks} />
                    
                </div>
            );
        }
}

export default App;