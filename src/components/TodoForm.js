import React from 'react';
import {Form,Label,Input,Button} from 'reactstrap';
import "./Todo.css";

class TodoForm extends React.Component{
    constructor(){
        super();  
        this.state={
            task :"",
            search:""
        }
    }

    handleChange=(e)=>{
    this.setState({
        task : e.target.value
    })
    }

    handleSearch=(e)=>{
        this.setState({
            search : e.target.value
        })
        }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTask(this.state.task)
        this.state.task="";
    }
   
    submitSearch=(e)=>{
        e.preventDefault();
        this.props.searchTask(this.state.search)
        this.state.search="";
    }

render(){
    return(
        <>
        <Form onSubmit={this.handleSubmit} className="form">
            <Label htmlFor="task" className="mt-4">Enter Todo Task</Label>
             <Input id="task"
             name="task"
             value={this.state.task}
             placeholder="Your Todo..."
             onChange={this.handleChange}/>
             <Button className="mt-3">Add Task</Button>
        </Form>
        {/* Search */}
        <br/>
        <Form  onClick={this.submitSearch}>
        <Label htmlFor="search" className="mt-4">Search Task</Label>
        <Input id="search"
        name="search"
        value={this.state.search}
        placeholder="Search Task..."
        onChange={this.handleSearch}/>
       <Button className="mt-3" color="info">Search Task</Button>
       </Form>
       </>
    )
}
}


export default TodoForm;
