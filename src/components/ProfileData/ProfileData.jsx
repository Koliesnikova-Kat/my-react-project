// ProfileData.jsx

import css from './ProfileData.module.css';

export default function ProfileData({ name, tag, location, image, stats }) {
  const { followers, views, likes } = stats;
  
  return (
    <div>
      <div className={css.info}>
        <img className={css.img} src={image} alt='User avatar' />
        <p>{name}</p>
        <p className={css.light}>@{tag}</p>
        <p className={css.light}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
