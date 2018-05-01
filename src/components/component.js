// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// trying to use Ryans code to figure this out.


class TodoList extends Component {
    // declare your `class`
    constructor() {
        // build out your `constructor`
        super();
        this.state = {
            // state is the data that our component will work with.
            title: "My To-Do List",
            char: "",
            someVal: "",
            tasks: ['Clean Room','Wash Car','Wash Clothes','Do The Dishes','Vacuum Floor']
        };
    }

    // lets build input that will allow us to type a new harry potter char
    // then a button, that will add that char into our chars array
    handleNameChange = event => {
        // a controlled input
        this.setState({ [event.target.name]: event.target.value });
    }; // I DID THIS - Because... REUSABILITY

    handleSubmitChar = () => {
        // take this.state.char add it to an array
        // this.setState() to replace the old array
        const tasks = this.state.tasks;
        const char = { name: this.state.char, id: this.state.char + tasks.length };
        tasks.push(char);
        this.setState({ tasks: tasks, char: "" });
    };

    render() {
        // `render` out some JSX
        console.log("Render was called");
        return (
            <div>
                <h1>{this.state.title}</h1>
                {/* 
          take the chars data from state, 
          loop over that data, 
          for each item in chars array, return a dom element 
        */}
                <CharsList tasks={this.state.tasks} />
                <input
                    name="char" // should be known as the state.value of the thing we update
                    onChange={this.handleNameChange}
                    value={this.state.char} // should be bound to the state.value of thing we update
                    placeholder="Chores you need to complete"
                />
                <button onClick={this.handleSubmitChar}>My Chores</button>
            </div>
        );
    }
}

export default TodoList;

// replace li with CharsList // DON'T FORGET TO PASS DOWN YOUR DATA CharsList
// fix CharsList to consume props data
