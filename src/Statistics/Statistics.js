import { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification';
import styles from './Statistics.module.scss';

class Statistics extends Component {
  render() {
    const { elStat, total, positivePercentage } = this.props;
    return total > 0 ? (
      <ul className={styles['stat-list']}>
        {elStat.map((el, id) => (
          <li key={id}>
            <p className={styles.feedback}>
              {el}
              <span className={styles.value}>{this.props[el]}</span>
            </p>
          </li>
        ))}
        <li>
          <p className={styles['count-stat']}>
            <span>Total</span>
            <span className={styles.value}>{total}</span>
          </p>
        </li>
        <li>
          <p className={styles['count-stat']}>
            <span>Positive feedback</span>
            <span className={styles.value}>{positivePercentage}</span>
          </p>
        </li>
      </ul>
    ) : (
      <Notification message="No feedback given" />
    );
  }
}

Statistics.propTypes = {
  elStat: PropTypes.arrayOf(PropTypes.string).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
