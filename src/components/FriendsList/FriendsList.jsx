import { FriendListItem } from '../FriendsListItem/FriendsListItem';

export function FriendList(props) {
  const friends = props.userFriends.map(friend => (
    <FriendListItem
      key={friend.id.toString()}
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
    />
  ));

  return <ul className="friend-list">{friends}</ul>;
}
