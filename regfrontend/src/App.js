import React from 'react';
//import './App.css';
//import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch}
    from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/common/Navbar';
//import Home from './components/common/Home';
//import Contact from './components/common/Contact';
import Footer from './components/common/Footer';
function App () {
    return (
        <Router>
            <div className='app-contaner'>
        <Navbar />
        <Switch>
            <Main />
            </Switch>
            <Footer/>
       </div>
       </Router>
    );
    
    }
      
    export default App;