import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
export default class Header extends React.Component {
  render() {
    return (
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>
    );
  }
}
