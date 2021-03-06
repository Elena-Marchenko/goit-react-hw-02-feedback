import PropTypes from 'prop-types';
import React from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../NotificationMessage/Notification';

const Section = ({
  state,
  title,
  titleStatistics,
  handleIncrement,
  total,
  positivePercentage,
  message,
}) => (
  <section>
    <div>
      <h1>{title}</h1>
      <FeedbackOptions onIncrement={handleIncrement} />
    </div>
    <div>
      <h2>{titleStatistics}</h2>
      <div>
        <ul>
          {total() !== 0 ? (
            <Statistics
              state={state}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message={message}></Notification>
          )}
        </ul>
      </div>
    </div>
  </section>
);

Section.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleStatistics: PropTypes.string.isRequired,
};

export default Section;
