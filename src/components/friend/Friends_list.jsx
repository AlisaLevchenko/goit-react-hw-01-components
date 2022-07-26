export function FriendList(props) {
  const friends = props.userFriends.map(friend => (
    <li key={friend.id.toString()} className="item">
      <span className="status">{friend.isOnline}</span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  ));

  return <ul className="friend-list">{friends}</ul>;
}
