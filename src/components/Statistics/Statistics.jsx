import React from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total ? (
      <>
        <h2>Statistics</h2>
        <ul>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total:{total}</li>
          <li>Positive Feedback:{positivePercentage}%</li>
        </ul>
      </>
    ) : (
      <Notification message="There is no feedback" />
    )}
  </>
);

Statistics.propTypes = {
  positivePercentage: PropTypes.node,
  total: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistics;
