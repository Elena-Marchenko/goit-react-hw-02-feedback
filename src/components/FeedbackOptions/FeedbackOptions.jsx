import React from 'react';

const FeedbackOptions = ({ state, onClick }) => (
  <>
    {Object.keys(state).map(key => (
      <button key={key} type="button" name={key} onClick={onClick}>
        {key}
      </button>
    ))}
  </>
);

export default FeedbackOptions;
