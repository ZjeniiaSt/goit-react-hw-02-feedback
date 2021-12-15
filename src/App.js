import './App.css';
import React, { Component } from 'react';
import Section from './components/Section';
import List from './components/Statistics/StatisticList';
import FeedbackOptions from './components/feedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          <List
            marks={this.state}
            total={this.countTotalFeedback()}
            positive={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
