import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import './Layout.css';
export default class Layout extends React.Component {
  render() {
    return (
      <div className="layoutContainer">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    );
  }
}
