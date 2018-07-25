import React from 'react';
import Todo from './components/TodoComponents/Todo';




const myList = ['groceries', 'pay bills', 'pay rent', 'learn react']

class App extends React.Component {
  constructor(){
    super();
    this.state = {
     items: myList 
    };
  }

  updateStateHandler = () => {
  
    const myClonedItems = this.state.items.slice(); 
  
    myClonedItems.push('buying more cats')

    this.setState({items: myClonedItems});
  };



  render() {
    return (
      <div>
        
        {this.state.items.map(items => <Todo toDoItemProp={items}/>
        )}
        
        <input type="text" onChange={this.updateStateHandler}/>

      </div>
    );
  }
}

export default App;
