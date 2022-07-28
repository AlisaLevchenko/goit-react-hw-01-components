import PropTypes from 'prop-types';
import s from './Profile.module.css';

export function User(props) {
  // console.log(props)
  const { username, tag, location, avatar, stats } = props;
  return (
    <div className={s.profile}>
      <div className="description">
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.title}>{username}</p>
        <p className={s.description}>@{tag}</p>
        <p className={s.description}>{location}</p>
      </div>

      <ul className={s.statsList}>
        <li className={s.statsItem}>
          <span className={s.statsItemLabel}>Followers </span>
          <span className={s.statsItemQuant}>{stats.followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.statsItemLabel}>Views </span>
          <span className={s.statsItemQuant}>{stats.views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.statsItemLabel}>Likes </span>
          <span className={s.statsItemQuant}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

User.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object,
};
