import React from 'react';
import uuid from 'uuid';

// we need some initial data
const initialTodos = [
  {
    task: 'Organize Garage',
    id: uuid(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: uuid(),
    completed: false
  }
];

// make a function that behaves like axios.get("todosURL")
const fakeTodosEndpoint = () => {
  return Promise.resolve(initialTodos);
};

// imagine hooks are not a thing
// and we need state
// class component it is!
class App extends React.Component {
  constructor(props) {
    // components are initialized with props
    // do not forget to call the parent constructor
    super(props);

    this.state = {
      // what slices?
      // with hooks we'd do:
      // const [todos, setTodos] = useState([])
      // const [newTodoTitle, setNewTodoTitle] = useState('')
      todos: [],
      newTodoTitle: '',
    }
  }

  componentDidMount() {
    // whatever code we put in here
    // will run only after initial render
    // good place to fetch data
    // 1- we fetch the data
    // 2- we put the data in the right slice of state
    fakeTodosEndpoint()
      .then(todos => {
        this.setState(oldState => { // oldState is the "current" this.state
          return {
            // return object with the slices that need update
            // only care about the slices that change
            todos: oldState.todos.concat(todos)
          }
        })
      })
    // with hooks we'd do:
    // useEffect(() => {
    //   fakeTodosEndpoint()
    //     .then(todos => setTodos(todos))
    // }, [])
  }

  render() {
    return (
      <div>Welcome to my todos app</div>
    );
  }
}

export default App;
