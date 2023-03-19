import React from 'react';
import { cardType } from '../../utils/utils';
import './Card.css';
export default class Card extends React.Component<cardType> {
  render() {
    return (
      <div className="good">
        <img src={this.props.img} alt="" />
        <h3 className="goodsName">{this.props.name}</h3>
        <p className="goodsDescription">{this.props.description}</p>
        <p className="goodsPrice">Price: {this.props.price} BYN</p>
        <p className="goodsRating">Rating: {this.props.rating}</p>
        <div className="likesContainer">
          <p className="goodsLikes">Likes: {this.props.likes}</p>
          <p className="goodsDislikes">Dislikes: {this.props.dislikes}</p>
        </div>
      </div>
    );
  }
}
