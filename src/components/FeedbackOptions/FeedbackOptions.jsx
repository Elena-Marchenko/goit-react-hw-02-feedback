import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {Object.keys(options).map(key => (
      <button key={key} type="button" name={key} onClick={onLeaveFeedback}>
        {key}
      </button>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
};

export default FeedbackOptions;
