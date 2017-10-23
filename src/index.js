/*eslint no-unused-vars: "off"*/
import React from 'react';
import { render } from 'react-dom';
import Todos from './todos/Todos';
import './index.scss';
// You'll want to import the necessary components you want the App component to render

const App = props => {
	return (
   		<div className="app" style={{height: window.innerHeight}}>
				<div className="box">
					<div className="title"><h1>Todos:</h1></div>
					<Todos />
				</div>
			</div>
   );
};

render(<App />, document.getElementById('root'));
