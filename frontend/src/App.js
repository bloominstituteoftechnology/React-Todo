import React, { Component  } from "react";
import axios from 'axios';
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { Form as ToDoForm}  from "./components/Form";

const port = 5555;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : [{}],
            todo: '',
            completed: false,
        
        }
    }

    componentDidMount() {
        console.log("pre-CDM", this.state.todos);
        let promise = axios.get(`http://localhost:${port}/api/todos`);
        promise
            .then(response => {
                this.setState({todos: response.data});
                console.log("post-CDM", this.state.todos);

            })
            .catch(err => {
                console.log(err.message);
            });
    }


    
    
    postTodos = () => { 
        axios.post(`http://localhost:${port}/api/todos`, this.state)
            .then(response => {
                this.props.history.push("/");
            })
    }
        
    
    
    deleteTodos =(id) =>{
        axios.delete(`http://localhost:${port}/api/todos/${id}`)
            .then(res =>{
                if(!res) {
                    console.log("Add a todo")
                }
                return this.setState({todos: res.data});
            })
            .catch(err => {
                console.log('Could not delete specified id', err)
            });
        }
    
    handleChange = (event) => {
        return this.setState({[event.target.name]:event.target.value});

    }

    handleSubmit = (event) => {
        event.preventDefault();
        const tasks = this.state.todos.slice(); //slice creates a copy of the array so we don't mutate the original
        tasks.push({todo: this.state.todo, completed:false, date: Date.now()});
        this.setState({todos:tasks, todo: ''});
    }


    handleToggle = (id) =>{
        //toggles a todo strikeout when done
        let todos =this.state.todos.slice();
            todos = todos.map(todo => {
                if (todo._id === id) {
                    todo.completed = !todo.completed;
                    console.log(todo.completed);
                    return todo;
                } 
                else {
                    return todo;
                }
            });
        this.setState({ todos });
    }
    

    handleRemove = (todoId) => {
        let todos = this.state.todos.slice();
        todos = todos.filter(todo => !todo.completed);
            this.setState({ todos });
        }

    render() {
        return (
                <div>
                    <Header />
                    <ToDoForm
                        value={this.state.todo}
                        handleChange={this.handleChange}
                        postTodos={this.postTodos}
                        handleRemove={this.handleRemove}
                    />
                    <ToDoList 
                    handleToggle={this.handleToggle}
                    todos={this.state.todos}
                    deleteTodos={this.deleteTodos}

                    />
                    
                </div>
            );
        }
}

export default App;