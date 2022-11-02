import React, { useState, Fragment } from 'react';
import axios from 'axios';
import Search from '../../users/Search';
import Users from '../../users/Users';
import Alert from '../../layout/Alert';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState({});
  const [alert, setAlert] = useState(null);

  //search github users
  const searchUsers = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUsers(res.data.items);
    setLoading(false);
  };

  //get single github user
  // const getUser = async (username) => {
  //   setLoading(true);

  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}$client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   setUser(res.data);
  //   setLoading(false);
  // };

  //clear users
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  //set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <Fragment>
      <Alert alert={alert} />
      <Search
        searchUsers={searchUsers}
        clearUsers={clearUsers}
        showClear={users.length > 0 ? true : false}
        setAlert={showAlert}
      />
      <Users loading={loading} users={users} />
    </Fragment>
  );
};

export default Home;
