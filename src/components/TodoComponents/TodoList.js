// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';
import todoarray from '../../todoArray.js';
class TodoList extends React.Component {
    constructor(props){
        super();
        this.state = {
            list: todoarray,
            newTask: {}
        };
    }

    handleInputChange = (e) => {

    };
    render(){
        return (
            <div>
                
                {this.state.list.map((item) => {
                    return <Todo task={item.task} />
                })}
                <TodoForm />
            </div>
        )

    }
}

export default TodoList;