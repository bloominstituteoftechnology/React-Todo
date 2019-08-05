import React from "react";
import { Button, Form } from "semantic-ui-react";

class ToDoForm extends React.Component{

    constructor() {
        super()
        this.state = {
            taskItem : ''
        };
    }

    handleChange = e => {

        this.setState({
            [e.target.name] : e.target.value
        })

    }
    
    submitItem = e => {
        e.preventDefault()

        this.props.addTask(this.state.taskItem)

        
        this.setState({
            taskItem : ''
        })

        console.log(this.state)
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
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
};

export default ToDoForm;
