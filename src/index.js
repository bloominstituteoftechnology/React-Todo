import React from 'react';
import { render } from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./components/TodoComponents/Todo.css";

render(<App />, document.getElementById('root'));
