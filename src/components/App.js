import React, { Component } from 'react';
import Section from './Section/Section';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const feedbacksAmount = Object.values(this.state);
    return feedbacksAmount.reduce((acc, value) => acc + value);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    const countPositivePercentage = ((good / total) * 100).toFixed(0);
    if (total) {
      return countPositivePercentage;
    }
    return 0;
  };

  render() {
    return (
      <Section
        state={this.state}
        title="Please leave feedback"
        titleStatistics="Statistics"
        handleIncrement={this.handleIncrement}
        total={this.countTotalFeedback}
        positivePercentage={this.countPositiveFeedbackPercentage}
        message="No feedback given"
      ></Section>
    );
  }
}
