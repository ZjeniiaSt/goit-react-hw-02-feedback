import React from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };

  handlDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <Controls onIncrement={this.handleIncrement} onDecrement={this.handlDecrement} />
      </div>
    );
  }
}

export default Counter;
