/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import Summary from './Summary';
import Total from './Total';

export default class Cart extends Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your Cart</h2>
        <Summary selected={this.props.selected} />
        <Total selected={this.props.selected} />
      </section>
    );
  }
}
