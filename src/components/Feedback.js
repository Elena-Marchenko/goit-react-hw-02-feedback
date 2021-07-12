import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <section>
        <div>
          <h1>Please leave feedback</h1>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>
        <div>
          <h2>Statisrics</h2>
          <div>
            <ul>
              <li>Good:</li>
              <li>Neutral:</li>
              <li>Bad:</li>
              <li>Total</li>
              <li>Positive feedback %</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Feedback;
