// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const toDos = [
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
            todoOnState: toDos,
            todo: {
                task: "",
                id: "",
                completed: ""
            }
        }
    }

    render() {
        return (
            <div>
                <h1>ToDo List:</h1>

                <div className="todo-list">
                    {this.state.todoOnState.map(toDos => {
                        <Todo toDos={toDos} />
                    })}
                </div>

            </div>
        )
    }
}

export default TodoList;