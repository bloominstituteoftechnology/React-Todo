// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, {Component} from 'react';
import Todo from './Todo';

const list = [
    {
        task: 'study code',
        id: 1,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 2,
        completed: false
      },
      {
          task: 'play smash bros',
          id: 3,
          completed: false
      }
];


class TodoList extends Component{
    constructor(){
        super();
        this.state = {
            todoList: list,
            message: 'Todo List MVP'
        }
    }
    render (){
        return(
            <div>
                <h1>Hello: {this.state.message}</h1>
                {this.state.todoList.map(todo => (
                    <Todo todoListProp={todo} />
                ))}
            </div>
        )
    }
}

export default TodoList;