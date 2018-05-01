class Todo extends Component {
    //declaring my class
    constructor() {
    //building out my constuctor 
    super();
    this.state = [
        //this is the state that the component will work with 
        {
          task: '',
          id: [],
          completed: boolean,
          chars: []
        },
      ];
    };
    //handles the input 
    handleAddTodo = event => {
        this.setState(({ [event.target.todo]: event.target.value }))
    }
    
    //handles submit
    handleSubmitTodo = () => {
        const chars = this.state.chars;
        const task  = {todo: this.state.task, id: this.state.task + task.length};
        chars.push(task);
        this.setState({chars: chars, task: ""});
    }

    //render function
    render()
};


//exports to App.js
export default App;
