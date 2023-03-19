import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>Page not found</h1>
        <NavLink to="/" style={{ color: '#a6d7fa' }}>
          Home
        </NavLink>
      </div>
    );
  }
}
