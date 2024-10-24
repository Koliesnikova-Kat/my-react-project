// Profile.jsx

import ProfileData from "../ProfileData/ProfileData";
import userData from "../../userData.json";
import css from './Profile.module.css';

export default function Profile() {
  return (
    <>
      <h2 className={css.header}>Профіль соціальної мережі</h2>
      <ul className={css.list}>
        {userData.map((user) => (
          <li key={user.tag} className={css.item}>
            <ProfileData
              name={user.userName}
              tag={user.tag}
              location={user.location}
              image={user.avatar}
              stats={user.stats}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
