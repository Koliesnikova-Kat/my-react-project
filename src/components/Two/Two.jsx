import css from "./Two.module.css";

export default function Two({ prop1, prop2, prop3 }) {
  return (
    <div className={css.item}>
      <img className={css.avatar} src={prop2} alt='Avatar' width='48' />
      <p>{prop1}</p>
      <p className={`${css.status} ${prop3 ? css.online : css.offline}`}>
        {prop3 ? "Online" : "Offline"}
      </p>
    </div>
  );
}
