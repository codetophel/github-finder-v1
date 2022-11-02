import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/pages/Home';
import About from './components/layout/pages/About';
import User from './components/users/User';
import PageNotFound from './PageNotFound';
import GithubState from './context/github/githubState';
import './App.css';

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/About' element={<About />} />
              <Route exact path='/User/:login' element={<User />} />
              <Route exact path='*' element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
