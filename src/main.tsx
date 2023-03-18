import React from 'react';
import Searchbar from './Searchbar';

export default class Main extends React.Component<Record<string, never>, { search: string }> {
  constructor(props: Record<string, never>) {
    super(props);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
  }
  state = {
    search: localStorage.getItem('search') || '',
  };

  searchbarOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: e.target.value });
  };
  saveToLocalStorage(): void {
    localStorage.setItem('search', this.state.search);
  }

  componentDidMount(): void {
    window.addEventListener('beforeunload', this.saveToLocalStorage);
  }

  componentWillUnmount(): void {
    this.saveToLocalStorage();
    window.removeEventListener('beforeunload', this.saveToLocalStorage);
  }

  render() {
    return <div>{<Searchbar onChange={this.searchbarOnChange} search={this.state.search} />}</div>;
  }
}
