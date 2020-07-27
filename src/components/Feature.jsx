/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import slugify from 'slugify';

export default class Feature extends Component {
  render() {
    const itemHash = slugify(JSON.stringify(this.props.item.name));
    console.log('aaa', this.props.item);
    console.log('bbb', this.props.featureName);
    console.log('ccc', this.props.selected[this.props.featureName].name);
    console.log('ddd', this.props.item.name);
    console.log(
      'eee',
      this.props.item.name === this.props.selected[this.props.featureName].name
    );
    return (
      <div className="feature__item">
        <input
          key={itemHash}
          type="radio"
          className="feature__option"
          id={itemHash}
          name={slugify(this.props.featureName)}
          onChange={(e) => {
            console.log('testing123');
            this.props.onChange(this.props.featureName, this.props.item);
          }}
          checked={
            this.props.item.name ===
            this.props.selected[this.props.featureName].name
          }
        />
        <label htmlFor={itemHash} className="feature__label">
          {' '}
          {this.props.item.name} (
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(this.props.item.cost)}
          )
        </label>
      </div>
    );
  }
}
