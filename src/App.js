import React from 'react';
import TodoStyle from './components/TodoComponents/Todo.css';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';

class App extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state

    constructor() {
        super();
        this.state = {
            name: "Zach"
        };
        
    }

    handleSingleClickEvent = () => {
        this.setState({name: "Steve"});
        console.log('testing click');
    };

    render() {
        return (
        <div>
            <h2>To-do List</h2>
            <h2 onClick={this.handleSingleClickEvent}>Hello {this.state.name}</h2>
            <ToDoList/>
            <ToDoForm/>
        </div>
        );
    }
}



export default App;
