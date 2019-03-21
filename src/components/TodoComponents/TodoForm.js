import React from 'react';
import './Todo.css';
import Task from './Task';
import Form from './Form';


const todo = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },

    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
];


class TodoForm extends React.Component {
    constructor(){
        super()

        this.state = {
            todo,
            task: '',
            completed: false,
        };
    }

    handleChanges = event => {
        // console.log('event: ', event.target);
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    updateList = item => {
        item.preventDefault();
        const newTask = {
            task: this.state.task,
            completed: false,
        };

         this.setState({
            todo: [...this.state.todo, newTask]
        });
        console.log(this.state.completed);
    };

    CompletedTask = (e) => {
        // console.log("clicked");
        // console.log(e.target.getAttribute('completed'));
        console.log(e);

        let selectedTask =e.completed; 
        console.log(e.completed);
        selectedTask = !selectedTask; 
        console.log(e.completed);
        
        this.setState({
            this.completed: selectedTask,
        })
        
        // this.setState({
        //     e.completed: !e.completed,
        // })
        // e.target.style.display = 'none';
        // const selectedTask = e.target; 
        // console.log(selectedTask);
        // // this.state.completed = this.state.completed;
        // console.log(selectedTask.completed);
        // this.value = false; 
        // this.setState({
        //     [e.target.completed]: e.target.value, 
        // })
        
        
    }


    render() {
        return(
            <div className="todo">
                <div className="list">
                {this.state.todo.map((taskfromMap, index) =>(
                    <Task key={index} item={taskfromMap} completed={taskfromMap} completedTaskFunction={this.CompletedTask}/>
                ))}
                </div>

                <Form
            task={this.state.task}
            completed={this.state.completed}
            updateList ={this.updateList}
            handleChanges = {this.handleChanges}
            />
            </div>
        );
    }
}

export default TodoForm;
