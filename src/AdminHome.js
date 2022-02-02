import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import StoryManager from './StoryManager';
import QAReview from './QAReview';
import "./styles/AdminHome.css"


const AdminHome = () => {
    const { user, isAuthenticated } = useAuth0();
    
    return (
        isAuthenticated && (
            <Router>
                <Header />
                <div className='main'>
                    <nav className='sidenav'>
                        <Link to="/admindashboard"> Dashboard </Link>
                        <Link to="/storymanager"> StoryManager </Link>
                        <Link to="/qareview"> QA Review </Link>
                    </nav>
                    <div className='container'>
                        <Routes>
                            <Route exact path="/" element={<Dashboard/>}/>
                            <Route path="/admindashboard" element={<Dashboard/>}/>
                            <Route path="/storymanager" element={<StoryManager/>}/>
                            <Route path="/qareview" element={<QAReview/>}/>  
                        </Routes>  
                    </div>
                </div>
                
            </Router>
        )
    )
}

export default AdminHome