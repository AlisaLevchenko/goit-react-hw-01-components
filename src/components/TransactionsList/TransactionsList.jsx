import PropTypes from 'prop-types';
import s from './TransactionsList.module.css';

export function TransactionHistory(props) {
  const transactions = props.userTransact.map(transaction => (
    <tr className={s.transactionValueRow} key={transaction.id}>
      <td className={s.transactionValue}>{transaction.type}</td>
      <td className={s.transactionValue}>{transaction.amount}</td>
      <td className={s.transactionValue}>{transaction.currency}</td>
    </tr>
  ));
  return (
    <table className={s.transaction}>
      <thead>
        <tr>
          <th className={s.transactionTitle}>Type</th>
          <th className={s.transactionTitle}>Amount</th>
          <th className={s.transactionTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>{transactions}</tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  userTransact: PropTypes.array,
};

//   {
//   id: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.string.isRequired,
//   currency: PropTypes.string.isRequired,
// },
