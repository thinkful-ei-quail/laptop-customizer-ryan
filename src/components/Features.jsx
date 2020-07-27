/* eslint-disable prefer-template */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Feature from './Feature';

export default class Features extends Component {
  render() {
    const featureOptions = this.props.options.map((item, index) => {
      // console.log(item, index);
      const featureHash = `${this.props.featureName}-${index}`;
      const selectedClass =
        item.name === this.props.selected[this.props.name].name
          ? 'feature_selected'
          : '';
      const featureClass = 'feature_option' + selectedClass;
      return (
        <Feature
          key={featureHash}
          item={item}
          featureName={this.props.name}
          featureClass={featureClass}
          selected={this.props.selected}
          onChange={this.props.onChange}
        />
      );
    });

    return (
      <fieldset className="feature" key={this.props.name}>
        <legend className="feature__name">
          <h3>{this.props.name}</h3>
        </legend>
        {featureOptions}
      </fieldset>
    );
  }
}
