import React, { Component  } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : [{ title: "Wash the car", subtasks:["Vacuum the car", "Dry the car", "Wax the car"]}],
            todo: '',
            id: null,
            completed: false,
        
    }
    }

    handleChange(event) {
        this.setState ({[event.target.name]:event.target.value})

    }

    handleSubmit(event) {
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
                <Header />
                <Form 
                    handleChange ={this.handleChange}
                    handleSubmit = {this.handleSubmit}
                    todos = {this.state.todos}
                    />
                <ToDoList 
                    todos = {this.state.todos}
                    complete = {this.state.complete}
                    handleToggle = {this.handleToggle}
                    handleRemove = {this.handleRemove}
                    />
            </div>
        );
    }
}

export default App;