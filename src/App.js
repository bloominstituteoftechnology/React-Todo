import React from 'react';
import Todos from './components/Todos';
import "./styles/App.css";
import Landing from './components/Landing';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import Todo from './components/Todo';
import Login from './components/Login';
import Signup from './components/Signup';

function App () {

    return (
        <Router>
            <div className="app">
                <h1 className="title">Toodue</h1> 
                <Routes>
                    <Route exact path="/" element={<Landing />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/signup" element={<Signup />}/>
                    <Route 
                        path="/user/todos" 
                        element={
                            <PrivateRoute>
                                <Todos />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/users/:user_id/todos/:todo_id"
                        element = {
                            <PrivateRoute>
                                <Todo />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </div>
        </Router>
      
    );
}

export default App;
