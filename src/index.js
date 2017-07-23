/*eslint no-unused-vars: "off"*/
import React from 'react';
import ReactDom from 'react-dom';
import listOfIngreds from './listOfIngreds';

require('!style-loader!css-loader!sass-loader!./index.scss');

const CreatePizza = React.createClass({
  getInitialState: function() {
    return {
      first: true
    };
  },
  flip: function() {
    this.setState({
      first: !this.state.first
    });
  },
  render: function() {
    let choice;
    if(this.state.first) {
    choice = this.props.ingreds.question;
    } else {
       choice = this.props.ingreds.answer;
    }
    return(<div>
      <p>{choice}</p>
      <button onclick = {this.flip}>Flip</button>
      <p>Question: {question} </p>
      <p>Answer: {answer} </p>
      </div>);
    }
});

// const listOfIngreds = React.createClass({
//   render: function() {
//     const list = this.props.ingreds.map(ingred => (
//       <li>{ingreds.question}</li>
//     ));
//     return (
//       <ul>{list}</ul>
//     );
//   },
// });

const App = React.createClass({
  getInitialState: function(){
    return {
      activeIndex : 0
    };
  },
  render: function(){
    // <div style={styles}>
    // <h2> Start selecting to have delecious pizza {'\u2728'}</h2></div>
    const activeIngreds = this.props.ingreds[this.state.activeIndex];
    return (
      <div>
      <CreatePizza ingred = {activeIngreds} />
      <listOfIngreds ingred = {this.prop.ingreds}/>
      </div>
    )
  }
});
const ingreds = [
  {
      question:"What do you need for pizza?",
      answer: "Crust"
  }, {
       question:"What sauce do you need?",
       answer:"Marinara"
  }, {
       question:"What toppings?",
       answer:"Cheese, olive, bellpepper"
  }
];

ReactDom.render(<App ingreds = {ingreds} />, document.getElementById('root'));
