import React, { useState, Fragment } from 'react';
import Search from '../../users/Search';
import Users from '../../users/Users';
import Alert from '../../layout/Alert';

const Home = () => {
  const [alert, setAlert] = useState(null);

  //set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <Fragment>
      <Alert alert={alert} />
      <Search setAlert={showAlert} />
      <Users />
    </Fragment>
  );
};

export default Home;
