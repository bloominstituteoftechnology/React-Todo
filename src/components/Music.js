import React from 'react';

class Music extends React.Component {
  render() {
    
  return (
    <div>
      <button onClick={this.props.play}>Play</button>
    </div>
    );
  }
}

export default Music;
