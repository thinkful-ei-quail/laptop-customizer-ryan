/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Features from './Features';

export default class FeatureList extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      console.log(this.props.features[feature], feature, 'SEL');
      const featureHash = `${feature}-${idx}`;
      return (
        <Features
          name={feature}
          key={featureHash}
          options={this.props.features[feature]}
          selected={this.props.selected}
          onChange={this.props.onChange}
        />
      );
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}
