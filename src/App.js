import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listContent: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ], /* holds all items added to todo list */ 
      inputText: '', /* text currently in the input field */
      newListItem: '' /* item being added to list upon submit */
    }
  };

  render() {
    return (
      <div className="App">
        <TodoList listContent={this.state.listContent} inputText={this.state.inputText} newListItem={this.state.newListItem} />
      </div>
    );
  }
}

export default App;
