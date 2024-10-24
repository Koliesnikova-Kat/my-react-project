import css from "./TransactionHistoryItem.module.css";

export default function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tbody className={css.tbody}>
      <tr className={css.tr}>
        <td className={css.td}>{type}</td>
        <td className={css.td}>{amount}</td>
        <td className={css.td}>{currency}</td>
      </tr>
    </tbody>
  );
}
