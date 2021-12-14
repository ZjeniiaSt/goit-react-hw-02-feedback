import React, { Component } from 'react';

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    1: 0,
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
        <h3> Statistics</h3>
        <ul>
          <li>Good:</li>
          <li>Neutral:</li>
          <li>Bad:</li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
