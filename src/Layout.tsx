import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default class Layout extends React.Component<{ location: Location }> {
  render() {
    return (
      <>
        <Header location={this.props.location} />
        <main>
          <Outlet />
        </main>
      </>
    );
  }
}
