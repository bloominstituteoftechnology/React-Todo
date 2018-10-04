import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        listData: [{ 
            listItem: "Drew",
            isCompleted:false,
            id:Date.now(),
        },],
        inputText: '',
        newTodo: '',
        };
    }

    changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
    };

    clearCompleted = event =>{
        console.log("working");
    }
    changeColor = event =>{
        this.setState({
            listData: this.state.listData.map((listItem, index)=>{
                if(index !== index){
                    return listItem;
                }else{
                    return{
                        ...listItem,
                        color: listItem.color === 'black'? 'green' : 'green',
                    };
                }
            })

        });
    };

    addNewListItem = event => {
        event.preventDefault();
        this.setState({
        listData: [
            ...this.state.listData,
            { 
                listItem: this.state.newTodo,
                isCompleted:false,
                id:Date.now(),
                color: 'black',
            },
        ],
        newTodo: ''
        });
    };

    render() {
        return (
        <div className="App">
        <TodoList listData={this.state.listData}/>

        <TodoForm
            addNewListItem={this.addNewListItem}
            changeHandler={this.changeHandler}
            listData={this.state.listData}
            inputText={this.state.inputText}
            newTodo={this.state.newTodo}
        />
        </div>
        );
    }
}

export default App;
