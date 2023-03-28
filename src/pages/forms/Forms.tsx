import React, { Component } from 'react';
import { cardType } from './Form';
import Form from './Form';
import Card from './Card';

interface FormsProps {}
interface FormsState {
  cards: cardType[];
}

export default class Forms extends Component<FormsProps, FormsState> {
  constructor(props: FormsProps) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  handleAddCard = (card: cardType): void => {
    this.setState((state) => {
      const cards: cardType[] = [];
      cards.push(...state.cards, card);
      return { cards };
    });
  };

  render() {
    return (
      <div>
        <h1>Forms</h1>
        <Form afterSumbit={this.handleAddCard} />
        <div className="cards">
          {this.state.cards.map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </div>
      </div>
    );
  }
}
