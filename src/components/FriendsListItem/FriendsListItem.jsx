import PropTypes from 'prop-types';
import s from '../FriendsListItem/FriendsListItem.module.css';

export function FriendListItem(props) {
  return (
    <li className={s.friendItem}>
      <span
        className={`${s.friendStatus} ${props.isOnline ? s.onLine : s.offLine}`}
      >
        {props.isOnline}
      </span>
      {/* {isOnlineDot} */}
      <img
        className={s.friendAvatar}
        src={props.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={s.friendName}>{props.name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
