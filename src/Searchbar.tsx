import React from 'react';
import './Searchbar.css';

type searchbarProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
};

export default class Searchbar extends React.Component<searchbarProps> {
  render() {
    return (
      <div className="container">
        <input
          defaultValue={this.props.search}
          className="searchbar"
          type="text"
          placeholder="Search...."
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
