import { Component } from 'react';
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
export default FeedbackOptions;
