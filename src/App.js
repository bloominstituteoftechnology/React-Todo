import React from "react";

const ToDos = [
  {
    todo: "pet cats",
    id: 12,
    completed: false
  },
  {
    todo: "study the TK",
    id: 13,
    completed: false
  },
  {
    todo: "go eat a pizza",
    id: 14,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ToDos
    };
  }

  toggleCompleted = itemId => {
    console.log("toggleCompleted in app", ItemId);
    this.setState({
      ToDos: this.state.ToDos.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addItem = itemName => {
    this.setState({
      ToDos: [
        ...this.state.ToDos,
        {
          todo: itemName,
          completed: false,
          id: (Math.random() * Math.random()).toString(9).substr(2, 9)
        }
      ]
    });
  };

  clearCompleted = () => {
    console.log("clear completed");
    this.setState({
      ToDos: this.state.ToDos.filter(item => {
        return !item.completed;
      })
    });
  };
  //still need to add item and clear purchased and work on render
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}
//still need to add components and state ^
export default App;
