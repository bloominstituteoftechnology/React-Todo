import React from 'react';
import './Todo.css';
import Task from './Task';
import Form from './Form';
import Button from './Button';



const todo = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false,
      type: 'Home',
    },

    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false,
      type: 'Work',
    }
];


class TodoForm extends React.Component {
    constructor(){
        super()

        this.state = {
            todo,
            task: '',
            completed: false,
            type: '', 
            toggled: false,
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
            id: (Math.random()),
        };
        // console.log(newTask);

         this.setState({
            todo: [...this.state.todo, newTask]
        });
        // console.log(this.state.completed);
    };

    deleteCompleted = item => {
        item.preventDefault();
        const newList = this.state.todo.slice();
        // console.log(newList);
        
        const filtered = newList.filter(item => 
            item.completed === false 

        )
        console.log(filtered);
        
        this.setState({
            todo: filtered, newList:""
        });
    };

    CompletedTask = (id) => {
        console.log(id);
        this.setState({ 
            todo: this.state.todo.map(item => {
            if(item.id === id) {
                return{
                    ...item,
                    completed: !item.completed
                };
            }
                return item;
        })
    });
        
    }

    expandForm = () => {
        
        this.setState({
            toggled: !this.state.toggled
        })

        console.log(this.state.toggled);
    }

    render() {
        const inputField = this.state.toggled; 
        console.log(inputField);
        let formComponent;

        if(inputField){
            formComponent=<Form />;
        } else{
            formComponent=null; 
        }
        

        return(
            <div className="todo">
                <div className="list">
                {this.state.todo.map((taskfromMap, index) =>(
                    <Task key={index} item={taskfromMap} completed={taskfromMap} completedTaskFunction={this.CompletedTask} deleteCompleted={this.deleteCompleted}/>
                ))}
                </div>
                      
                <Button expandForm={this.expandForm} newProp={Form}/>
                {formComponent}
            </div>
           


        




        );
    }
}

export default TodoForm;
