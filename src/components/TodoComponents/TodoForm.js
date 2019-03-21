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
        console.log(newList);
        
        const filtered = newList.filter(item => 
            item.completed === false 
            // console.log(item);
            // console.log(item.completed);
            // var index = newList.indexOf(item);
            // console.log(index);
            // if (item.completed === true) {
            //     newList.splice(index, 1);
            // }

            // return newList;
            // console.log(newList);

        )
        console.log(filtered);
        
        this.setState({
            todo: filtered, newList:""
        });

    //     let Completed = {task: this.state.task,};
    //     console.log(Completed);
        // Completed = Completed.filter((task) => {
        //     console.log(this )
        // })
        // const completed = {
        //     task: Completed.state.task,
        // // }
        // this.setState({

        //     })
        // })
        // console.log(Completed);
        // this.setState({
        //     completed: this.state.todo.map(item=> {
        //         if(item.completed===true) {
        //             item.target.style.display = 'none';
        //         }
        //     })
        // })
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


    render() {
        return(
            <div className="todo">
                <div className="list">
                {this.state.todo.map((taskfromMap, index) =>(
                    <Task key={index} item={taskfromMap} completed={taskfromMap} completedTaskFunction={this.CompletedTask} deleteCompleted={this.deleteCompleted}/>
                ))}
                </div>

                <Form
            task={this.state.task}
            completed={this.state.completed}
            updateList ={this.updateList}
            handleChanges = {this.handleChanges}
            deleteCompleted = {this.deleteCompleted}
            />
            </div>
        );
    }
}

export default TodoForm;
