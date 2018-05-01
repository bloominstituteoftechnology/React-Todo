import React from 'react';

class List extends React.Component {
    render () {
      return (
        <ul>
          {
            this.props.list.map((item, i) => {
              return <li key={i} className={this.props.className} onClick={this.props.toggleClassName}>{item}</li>;
            })
          }
        </ul>
      );
    }
  }
  
  export default List;