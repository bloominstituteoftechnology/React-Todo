// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import './Todo.css';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.todos)
        this.state = {
            
        }
    }

    // componentDidMount() {
    //     this.setState({
    //         filtered: this.props.items
    //     });
    // }
      
    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         filtered: nextProps.items
    //     });
    // }



render() {
        return (
            <div className="listContainer">
                {this.props.todos.map(element => (
                    <Todo
                        handleToggleComplete={this.props.handleToggleComplete}
                        key={element.id}
                        todo={element}
                    />
                ))}
            </div>
        );
}
}

export default TodoList;