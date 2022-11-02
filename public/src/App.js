import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/pages/Home';
import About from './components/layout/pages/About';
import User from './components/users/User';
import PageNotFound from './PageNotFound';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    alert: null,
    user: {},
    repos: [],
    loading: false,
  };

  //get each user deets
  getUser = async (username) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      user: res.data,
      loading: false,
    });
  };

  //get user repos
  getUserRepos = async (username) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      repos: res.data,
      loading: false,
    });
  };

  render() {
    const { user, loading, repos } = this.state;

    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/About' element={<About />} />
              <Route
                exact
                path='/User/:login'
                element={
                  <User
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                    getUserRepos={this.getUserRepos}
                    repos={repos}
                  />
                }
              />
              <Route exact path='*' element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
