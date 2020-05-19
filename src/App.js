/***************
 LIBRARIES
 ***************/
import React from 'react';

/***************
 COMPONENTS
 ***************/
import taskData from './taskData';
import TodoList from './components/TodoList';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: taskData
        };
    }

    render() {
        return (
            <div>
                <h2>Welcome to your Todo App!</h2>
                <TodoList taskData={this.state.tasks}/>
            </div>
        );
    }
}

export default App;
