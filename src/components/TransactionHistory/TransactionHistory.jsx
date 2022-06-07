import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.title}>
        <tr>
          <th className={styles.tableBox}>Type</th>
          <th className={styles.tableBox}>Amount</th>
          <th className={styles.tableBox}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.tableRow}>
            <td className={styles.tableBox}>{firstLetterLarge(type)}</td>
            <td className={styles.tableBox}>{amount}</td>
            <td className={styles.tableBox}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function firstLetterLarge(string) {
  if (!string) {
    return;
  }

  const splitedType = string.split('');
  const firstLetter = splitedType[0].toUpperCase();
  const typeCopy = [...splitedType];
  typeCopy.splice(0, 1);
  const result = [firstLetter, ...typeCopy].join('');
  return result;
}

export default TransactionHistory;
