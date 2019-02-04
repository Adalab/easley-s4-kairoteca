import React, { Component } from "react";
import CardDetail from './Detail/CardDetail';

class List extends Component {
  render() {
    return (
      <div className="book__wrapper">
        <ul className="book__container">
          {this.props.haveBooks && this.props.bookList.map(item => {
            return (
              <li key={item.id} className="book__list">
                <CardDetail item={item} loan={this.props.loan} handleLoan={this.props.handleLoan}/>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default List;