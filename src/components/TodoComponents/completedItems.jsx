import React, { Component } from "react";
class CompletedItems extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card" style={{width: "18rem"}}>
        <ul className="list-group">
          {this.props.items.map((item, index) => (
            <li className="list-group-item" key={index}>
              <h3>{`${item.name} `}</h3>
              <small>{item.completedOn}</small>
              <button className={item.btnClass} onClick={() => this.props.handleClick(item)}>
                {item.completed}
              </button>
            </li>
            
          ))}
        </ul>
      </div>
    );
  }
}

export default CompletedItems;
