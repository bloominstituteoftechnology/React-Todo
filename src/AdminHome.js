import React, {useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import StoryManager from './StoryManager';
import QAReview from './QAReview';
import "./styles/AdminHome.css"


const hamburguer = "https://img.favpng.com/19/10/17/back-and-forth-arrows-png-png-favpng-5Etk4bL78Pf9Kcj8BaL4mMQKG.jpg"

const dashImg = "https://cdn-icons-png.flaticon.com/512/187/187474.png"

export const storyManagerImg = "https://cdn-icons-png.flaticon.com/512/856/856994.png"

const AdminHome = () => {
    const { user, isAuthenticated } = useAuth0();
    const [isActive, setActive] = useState("true");

    const handleToggle = () => {
        setActive(!isActive);
      };
    
    return (
        isAuthenticated && (
            <Router>
                <Header />
                <div className='main'>
                    <nav className={isActive? "wide-sidebar": "narrow-sidebar"}>
                        <div className='navlinks'>
                            <div className='navlink'>
                                <Link to="/admindashboard"> <img src={dashImg} alt='hamburger menu'/>{isActive? "Dashboard":""} </Link></div>
                            <div className='navlink'>
                                <Link to="/storymanager"> <img src={storyManagerImg} alt='hamburger menu'/>{isActive? "Story Manager":null} </Link>
                            </div>
                        </div>
                        <div 
                            className='ham'
                            onClick={handleToggle}>
                            <img src={hamburguer} alt='hamburger menu'/>
                        </div>
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