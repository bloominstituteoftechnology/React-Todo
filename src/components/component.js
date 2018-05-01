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
    constructor(props) {
        // console.log('props.parent',props.parent);
        // console.log('props.currentInput',props.currentInput);
        super(props);
        this.state = {
            currentInput: ''
        }
        this.parent = props.parent;
    }
    render(){
        return (
            <input type='text' name="input" placeholder="Input-Component" value={this.state.currentInput}  />
        )
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
            todos: ['tst-todo-1','tst-todo-2','tst-todo-3','tst-todo-4','tst-todo-5','tst-todo-6','tst-todo-7','tst-todo-8','tst-todo-9','tst-todo-10'],
            currentInput: '',
            // getCurrentInput: this.getCurrentInput.bind(this)
        }
    }
    onInputChange = (e) => {
        console.log('hello form getCurrentInput')
        console.log(e.target.value);
        this.setState( {currentInput: e.target.value} )
    }
    render(){
        // console.log(this);
        // const parent = this;
        // console.log(parent);
        return (
            <div onChange={this.onInputChange}>
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