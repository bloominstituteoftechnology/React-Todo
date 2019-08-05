import React from "react";
import { Button, Form } from "semantic-ui-react";

class ToDoForm extends React.Component{

    constructor() {
        super()
        this.state = {
            taskItem : ''
        };
        this.baseState = this.state.taskItem
    }

    handleChange = e => {

        this.setState({
            [e.target.name] : e.target.value
        })

    }
    
    submitItem = e => {
        e.preventDefault()

        const taskItem = this.state.taskItem

        this.props.addTask(this.state.taskItem)

        
        this.setState({
            taskItem : ''
        })
    }

    clearCompleted = event => {

        event.preventDefault()

        this.props.clearCompleted()

    }

    render() {
        return (
            <Form onSubmit = {this.submitItem}>
                <Form.Field>
                    <label>Add Task</label>
                    <input 
                        placeholder="Task Description" 
                        value = {this.taskItem}
                        name = 'taskItem'
                        onChange = {this.handleChange}
                        />
                </Form.Field>
                <Button type="submit" >Add To Do</Button>
                <Button type="button" onClick = {this.clearCompleted} className = 'remove-btn'>Clear Completed</Button>
            </Form>
        );
    }
};

export default ToDoForm;
