import css from "./TransactionHistory.module.css";
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";

export default function TransactionHistory({ items }) {
  return (
    <>
      <h2 className={css.header}>Історія транзакцій</h2>
      <table className={css.table}>
        <thead className={css.thead}>
          <tr className={css.throw}>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>
        {items.map((item) => (
          <TransactionHistoryItem
            key={item.id}
            className={css.item}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </table>
    </>
  );
}
