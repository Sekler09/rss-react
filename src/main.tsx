import React from 'react';
import Card from './Card';
import Searchbar from './Searchbar';
import { cardType, generateCards } from './utils';
import './Main.css';

export default class Main extends React.Component<
  Record<string, never>,
  { search: string; cards: cardType[] }
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
  }
  state = {
    search: localStorage.getItem('search') || '',
    cards: generateCards(24),
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
    return (
      <div className="mainContainer">
        {<Searchbar onChange={this.searchbarOnChange} search={this.state.search} />}
        <div className="cardsContainer">
          {this.state.cards.map((card, i) => (
            <Card
              key={i}
              img={card.img}
              likes={card.likes}
              dislikes={card.dislikes}
              description={card.description}
              price={card.price}
              rating={card.rating}
              name={card.name}
            />
          ))}
        </div>
      </div>
    );
  }
}
