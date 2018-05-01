import React from "react"; 

class AddToList extends React.Component {
    render(){
        return (
        <button>
            AddToList
        </button>
    )
    }
}

class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            currentInput: ''
        }
    }
    render(){
        return (
            <input onChange={this.handleChange} type='text' name="input" placeholder="Input-Component" value={this.state.currentInput}  />
        )
    }
    handleChange = (e) => {
        // this.state.currentInput = e.target.value;
        this.setState( {currentInput: e.target.value} );

    }
}

class ListItem extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render(props){
        return (
            <li key={this.props.key}> {this.props.todo} </li>
        )
    }

}

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: ['tst-todo-1','tst-todo-2','tst-todo-3','tst-todo-4','tst-todo-5','tst-todo-6','tst-todo-7','tst-todo-8','tst-todo-9','tst-todo-10']
        }
    }
    render(){
        return (
            <div>
                Todo-List-Component
                <ol>
                    <li>ListItem-Component</li>
                    {/* <ListItem /> */}
                    {this.state.todos.map( (todo, indx) => <ListItem key={indx} todo={todo} /> )}
                </ol>
                <Input />
                <AddToList />
            </div>
        )
    }
}

export default TodoList;