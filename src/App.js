import React, { Component } from 'react';
import FeedbackOptions from './Feedback';
import Statistics from './Statistics';
import Section from './Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  stat = {
    total: 0,
  };

  addFeedback = e => {
    this.setState({
      [e.currentTarget.textContent]:
        this.state[e.currentTarget.textContent] + 1,
    });
  };

  countTotalFeedback = ({ good, neutral, bad }) =>
    (this.stat.total = good + neutral + bad);

  countPositiveFeedbackPercentage = ({ good }) =>
    this.stat.total ? `${Math.round((good / this.stat.total) * 100)}%` : 0;

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            elStat={Object.keys(this.state)}
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state,
            )}
          />
        </Section>
      </>
    );
  }
}

export default App;
