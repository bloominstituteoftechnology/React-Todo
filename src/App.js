import React from "react";

//Components
import TodoList from "./components/TodoList";
import Header from "./header/Header";
// import itemData from "./itemData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemData: []
    };
  }

  toggleItem = itemID => {
    this.setState({
      itemData: this.state.itemData.map(item => {
        if (itemID === item.itemID) {
          return {
            ...item,
            purchased: !item.purchased
          };
        }
        return item;
      })
    });
  };

  addItem = itemText => {
    const newItem = {
      name: itemText,
      itemID: Date.now(),
      purchased: false
    };
    this.setState({
      itemData: [...this.state.itemData, newItem]
    });
  };

  deleteAll = () => {
    this.setState({
      itemData: []
    });
  };

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <TodoList
            itemData={this.state.itemData}
            toggleItem={this.toggleItem}
            addItem={this.addItem}
            deleteAll={this.deleteAll}
          />
        </div>
      </>
    );
  }
}

export default App;
