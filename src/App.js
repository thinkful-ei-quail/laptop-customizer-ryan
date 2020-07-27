/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';

// import the data
import FEATURES from './FEATURES';

// import the first level components
import Header from './components/Header';
import FeatureList from './components/FeatureList';
import Cart from './components/Cart';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700,
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200,
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98,
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500,
        },
      },
    };
  }

  updateFeature = (feature, newValue) => {
    const selected = { ...this.state.selected };
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <FeatureList
            features={FEATURES}
            selected={this.state.selected}
            onChange={this.updateFeature}
          />
          <Cart selected={this.state.selected} />
        </main>
      </div>
    );
  }
}
