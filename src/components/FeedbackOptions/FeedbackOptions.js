import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onIncrement }) => (
  <>
    <button name="good" onClick={onIncrement}>
      Good
    </button>
    <button name="neutral" onClick={onIncrement}>
      Neutral
    </button>
    <button name="bad" onClick={onIncrement}>
      Bad
    </button>
  </>
);

FeedbackOptions.propTypes = {
  onIncrement: PropTypes.func.isRequired,
};

export default FeedbackOptions;
