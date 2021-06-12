import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul className={styles['btn-list']}>
        {options.map((el, id) => (
          <li className={styles['btn-list-item']} key={id}>
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
