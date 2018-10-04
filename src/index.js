import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(<App />, document.getElementById('root'));



//for testing purposes because testing was difficult with local storage.
// window.onbeforeunload = function() {
//    localStorage.clear();
// }
