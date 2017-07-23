import React from 'react';

const listOfIngreds = React.createClass({
  render: function() {
    const list = this.props.ingreds.map(ingreds => (
      <li>{ingreds.question}</li>
    ));
    return (
      <ul>{list}</ul>
    );
  },
});

export default listOfIngreds;
