import React, { Fragment } from 'react';
import Search from '../../users/Search';
import Users from '../../users/Users';
import Alert from '../../layout/Alert';
import AlertState from '../../../context/alert/alertState';

const Home = () => {
  return (
    <Fragment>
      <AlertState>
        <Alert />
        <Search />
        <Users />
      </AlertState>
    </Fragment>
  );
};

export default Home;
