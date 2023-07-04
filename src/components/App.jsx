import React, { Component } from 'react';
// import Section from './Section/Section';
// import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleIncrementGood = () => {
  //   this.setState(prevState => ({ good: prevState.good + 1 }));
  // };
  // handleIncrementNeutral = () => {
  //   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  // };
  // handleIncrementBad = () => {
  //   this.setState(prevState => ({ bad: prevState.bad + 1 }));
  // };

  handleClick = e => {
    const { name } = e.currentTarget;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const stateValues = Object.values(this.state);
    const total = stateValues.reduce((previous, current) => previous + current);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const percentage = (good / total) * 100;
    if (!total) {
      return 0;
    }
    return percentage.toFixed();
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return (
      <>
        <div>
          <h1>Please leave feedback</h1>
          <div>
            <h2>Statistics</h2>
            <ul>
              <li>Good:{good}</li>
              <li>Neutral:{neutral}</li>
              <li>Bad:{bad}</li>
              <li>Total:{totalFeedback}</li>
              <li>Positive Feedback:{positiveFeedback}%</li>
            </ul>
          </div>
        </div>
        <FeedbackOptions state={this.state} onClick={this.handleClick} />
        {/* <Section title="">
          Hallo
          
          <FeedbackOptions />
        </Section> */}
      </>
    );
  }
}
export default App;
