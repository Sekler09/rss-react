import React, { Component } from 'react';
import { cardType } from './Form';
import './CardCopy.css';

interface CardProps {
  card: cardType;
}

export default class Card extends Component<CardProps> {
  render() {
    return (
      <div className="pet">
        <img src={URL.createObjectURL(this.props.card.photo)} alt="" />
        <h3 className="petsName">{this.props.card.name}</h3>
        <p className="petsDescription">{this.props.card.type}</p>
        <p className="petsCharacter">Charcter: {this.props.card.character.join(' ')}</p>
        <p className="petsBirth"> Birth Date:{this.props.card.date}</p>
        <p className="petsSex">Sex: {this.props.card.sex}</p>
      </div>
    );
  }
}
