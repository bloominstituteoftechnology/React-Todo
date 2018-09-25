import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      formArr: [],
      count: 0,
      completed: false
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleCheck = e => {
    let { formArr } = this.state;
    console.log(e.id);
    console.log(formArr[0]);

    formArr[e.id].completed = true;
  };

  handleSubmit = e => {
    let { formArr, value, count, completed } = this.state;
    e.preventDefault();

    formArr.push({
      id: count,
      text: value,
      date: Date.now(),
      completed: completed
    });
    console.log(formArr[count]);
    console.log(formArr[0]);
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          {this.state.formArr.map(item => (
            <div key={item.id}>
              <input
                id={item.id}
                type="checkbox"
                onChange={item => this.handleCheck(item)}
              />
              {item.id}: {item.text} @{new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit"
              }).format(item.date)}
            </div>
          ))}
        </div>

        <form>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default App;
