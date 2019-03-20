import React from 'react';
import './Todo.css';
import Task from './Todo';
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
            todo: [],
            task: '',
        };
    }

    handleChanges = event => {
        console.log('event: ', event.target);
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    updateList = item => {
        item.preventDefault();
        const newTask = {
            task: this.state.task,
        };

         this.setState({
            todo: [...this.state.todo, newTask]
        });
    };

    


    render() {
        return(
            <div className="todo">
                <div className="list">
                {this.state.todo.map((taskfromMap, index) =>(
                    <Task key={index} item={taskfromMap} />
                ))}
                </div>

                <Form
            task={this.state.task}
            updateList ={this.updateList}
            handleChanges = {this.handleChanges}
            />
            </div>
    
        );
    }
}

export default TodoForm;