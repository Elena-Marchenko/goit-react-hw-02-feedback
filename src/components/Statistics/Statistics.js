import React from 'react';

const Statistics = ({ state, total, positivePercentage }) => (
  <>
    <li>Good: {state.good}</li>
    <li>Neutral: {state.neutral}</li>
    <li>Bad: {state.bad}</li>
    <li>Total: {total()}</li>
    <li>Positive feedback: {positivePercentage()} %</li>
  </>
);

export default Statistics;
