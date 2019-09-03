// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js'
class TodoList extends React.Component {
    constructor(props){
        super(props);
        console.log ('T', props);
    }
render(){
    console.log('TodoList', this.props);
    return(
        <div>
        {this.props.todos.map(todo => <Todo key={todo.id} todo={todo} toggleCompleted={this.props.toggleCompleted} />)}
        </div>
    );
}
}

export default TodoList;