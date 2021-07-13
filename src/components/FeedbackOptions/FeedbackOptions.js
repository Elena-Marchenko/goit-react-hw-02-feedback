import React from 'react';

const FeedbackOptions = ({ onIncrement }) => (
  <>
    <button name="good" onClick={onIncrement}>
      Good:
    </button>
    <button name="neutral" onClick={onIncrement}>
      Neutral:
    </button>
    <button name="bad" onClick={onIncrement}>
      Bad:
    </button>
  </>
);

export default FeedbackOptions;
