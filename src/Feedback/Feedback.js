import { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './Feedback.module.scss';

class FeedbackOptions extends Component {
  feedbackId = () => shortid.generate();
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul className={styles['btn-list']}>
        {options.map(el => (
          <li className={styles['btn-list-item']} key={this.feedbackId()}>
            <button className={styles.btn} onClick={onLeaveFeedback}>
              {el}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
