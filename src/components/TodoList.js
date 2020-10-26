// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends React.Component {
    constructor () {
        super()
        this.state = {
            Todo: [
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
            ]
        }
    }

    Add = (task) => {
        this.setState(prevState => {
            return {
                Todo: [
                    ...prevState.Todo, task
                ]
            }
        })
    }

    Completed = () => {
        this.setState(prevState => {
            return {
                Todo: prevState.Todo.filter((items) => {
                    return !items.Completed
                })
            }
        })
    }

    Toggle = (id) => {
        this.setState(prevState => {
            return {
                Todo: prevState.Todo.map(item => {
                    if(item.id === id) {
                        return {
                            ...item,
                            Completed: !item.Completed
                        }
                    }
                    return item;
                })
            }
        })
    }

    render() {
        return (
            <div>
                <Todo Toggle={this.Toggle} Todo={this.state.Todo} />
                <TodoForm Add={this.Add} Completed={this.Completed} />
            </div>
        )
    }
}

export default TodoList;