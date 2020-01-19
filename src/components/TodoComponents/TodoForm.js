import React from "react";
import { Button, Form, Input } from 'reactstrap';

class TodoForm extends React.Component {
    
    constructor(){
        super();
        this.state = {
            newTask: ""
        };
    }
    
    handleChanges = e =>{
        this.setState({ ...this.state, newTask: e.target.value})
    };

    handleSubmit = e =>{
        e.preventDefault();
        this.props.addNewTask(this.state.newTask);
        
    };

    render(){
        return(
            <Form onSubmit={this.handleSubmit} className="addTaskInput">
                <Input 
                    onChange={this.handleChanges}
                    type="text"
                    name="task"
                    placeholder="Add new task"
                    value={this.state.newTask}/>
            
                <Button >Add </Button>
            </Form>
        )
    }
}
export default TodoForm;