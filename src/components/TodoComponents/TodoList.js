// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TheData = [
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

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
        theList: TheData,
        task: '',
        id: '',
        }
    }

    handleChanges = event => {
        console.log(event.target.value)
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleClick = event => {
        alert(event.target.name);
    }

    render() {
        return (
            <div className="form-wrapper">
                <div className="task-list">
                    {this.state.theList.map((listFromMap, index) => (
                        <Todo key={index} listProp={listFromMap} />
                    ))}
                </div>
                <Todo />
                <TodoForm 
                    task={this.state.task}
                    handleClick={this.handleClick}
                />
            </div>
        )
    }
}

export default TodoList