import { TodoList } from './TodoList';

class Todo extends App {
    // declare your `class`
    constructor() {
        // build out your `constructor`
        super();
        this.state = {
            // state is the data that our component will work with.
            title: 'Welcome to Hogwarts',
            activities: ['swimming', 'Snape', 'Hermoine', 'Ron', 'Dobby', 'Dumbledore']
        };
    }

    render() {
        // `render` out some JSX
        return (
            <div>
                <h1>{this.state.title}</h1>
                {/* 
          take the chars data from state, 
          loop over that data, 
          for each item in chars array, return a dom element 
        */}
                <ul>
                    {this.state.Todo.map((Todo, index) => <li key={index}>{Todo}</li>)}
                </ul>
            </div>
        );
    }
}

export default TodoList;
