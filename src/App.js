import React, { Component } from "react";
import FormSubmit from './components/FormSubmit';
import ToDoList from './components/ToDoList';

class App extends Component {
    constructor(){
        super();
        this.state = {
            tasks: ['Wash car'],
            task: "",
            id: null,
            completed: false,
        }

    }
        
    changeHandle = (event) =>{
        this.setState ({[event.target.name]:event.target.value})//every time you call setState you call the render function
    }



    submitHandle = (event) =>{
        event.preventDefault();
        const tasks = this.state.tasks.slice(); //slice creates a copy of the array so we don't mutate the original
        tasks.push(this.state.task);
        this.setState({tasks:tasks, task: ''});
    }

    handleRemoveTask = (taskId) => {
        const tasks = this.state.tasks.map((task) => {
            if (taskId===this.state.id){
                this.state.completed = !this.state.completed
            }
            return {task}
            
        });
        
            this.setState({tasks})
        }
       
    

    render(){
        return(
            <div>       
            <h1>My To-Do List</h1>     
            <FormSubmit tasks = {this.state.tasks}
                        changeHandle = {this.changeHandle}
                        submitHandle = {this.submitHandle} />
            <ToDoList 
                tasks = {this.state.tasks}
                handleRemoveTask = {this.handleRemoveTask}/>
                
          
            </div>   
        )
        
    }
}
export default App;

