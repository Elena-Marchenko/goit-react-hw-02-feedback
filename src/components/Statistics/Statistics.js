import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ state, total, positivePercentage }) => (
  <>
    <li>Good: {state.good}</li>
    <li>Neutral: {state.neutral}</li>
    <li>Bad: {state.bad}</li>
    <li>Total: {total()}</li>
    <li>Positive feedback: {positivePercentage()} %</li>
  </>
);

Statistics.propTypes = {
  positivePercentage: PropTypes.func.isRequired,
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.func.isRequired,
};

export default Statistics;
