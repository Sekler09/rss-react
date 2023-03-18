import React from 'react';

export default class Header extends React.Component<{ location: Location }> {
  getLocationTitle(pathname: string): string {
    switch (pathname) {
      case '/':
        return 'Home Page';
      case '/about':
        return 'About Page';
      default:
        return 'Undefined Page';
    }
  }

  render() {
    return <header>{this.getLocationTitle(this.props.location.pathname)}</header>;
  }
}
