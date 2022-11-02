import React, { Fragment, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Repos from '../repos/Repos';
import Spinner from '../layout/Spinner';
import { useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

export const User = () => {
  const githubContext = useContext(GithubContext);

  const { getUser, user, loading, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(login);
    getUserRepos(login);
    //eslint-disable-next-line
  }, []);

  const { login } = useParams();

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    html_url,
    hireable,
  } = user;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to Search
      </Link>
      Hireable: {''}
      {hireable ? (
        <i className='fa-solid fa-square-check text-success'></i>
      ) : (
        <i className='fa-solid fa-circle-xmark text-danger'></i>
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt=''
            className='round-img'
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
          </a>

          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong> Username: </strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong> Company: </strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong> Blog: </strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public repos: {public_repos}</div>
        <div className='badge badge-dark'>Public gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
