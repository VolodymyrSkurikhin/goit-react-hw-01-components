import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => (
  <table className={s.transactionHistory}>
    <thead>
      <tr className={s.title}>
        <th className={s.header}>Type</th>
        <th className={s.header}>Amount</th>
        <th className={s.header}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id} className={s.row}>
          <td className={s.dataRow}>{item.type}</td>
          <td className={s.dataRow}>{item.amount}</td>
          <td className={s.dataRow}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
