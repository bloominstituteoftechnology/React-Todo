import React from 'react';
import TodoItems from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          listData: [
              { 
              },
          ],
          inputText: '',
          newTodo: ''
        };
    }

    changeHandler = event => {
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
    };

    addNewListItem = event => {
        event.preventDefault();
        this.setState({
        listData: [
            ...this.state.listData,
            { listItem: this.state.newTodo }
        ],
        newTodo: ''
        });
    };

    render() {
        return (
        <div className="App">
        <div>
            {this.state.listData.map(item => {
            return <h1>{item.listItem}</h1>;
        })}
        </div>
        <TodoItems
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
