import css from "./One.module.css";
import Two from "../Two/Two";

export default function One({ props }) {
  return (
    <>
      <h2 className={css.header}>Список друзів</h2>
      <ul className={css.list}>
        {props.map((prop) => (
          <li key={prop.id} className={css.item}>
            <Two
              avatar={prop.avatar}
              name={prop.name}
              isOnline={prop.isOnline}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
