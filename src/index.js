import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(<App />, document.getElementById('root'));

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        disneyData: [
          { characterName: 'Mickey Mouse' },
          { characterName: 'Minnie Mouse' },
          { characterName: 'Donald Duck' },
          { characterName: 'Goofy' },
          { characterName: 'Pluto' }
        ],
        color: 'red',
        inputText: '',
        inputTwoText: '',
        newCharacter: ''
      };
    }
  
    
  
    changeHandler = event => {
      console.log(event.target.name);
      this.setState({ [event.target.name]: event.target.value });
    };
  
    addNewCharacter = event => {
      event.preventDefault();
      this.setState({
        disneyData: [
          ...this.state.disneyData,
          { characterName: this.state.newCharacter }
        ],
        newCharacter: ''
      });
    };
  
    render() {
      return (
        <div className="App">
          <DisneyNames
            addNewCharacter={this.addNewCharacter}
            changeColor={this.changeColor}
            changeHandler={this.changeHandler}
            disneyData={this.state.disneyData}
            inputText={this.state.inputText}
            newCharacter={this.state.newCharacter}
            style={this.state.color}
          />
        </div>
      );
    }
  }
  
  const rootElement = document.getElementById('root');
  ReactDOM.render(<App />, rootElement);