import { User } from '../components/profile/Profile';
import userData from '../data/user.json';
import { Stats } from '../components/statics/Statistics';
import userStatistics from '../data/data.json';
import { FriendList } from '../components/friend/FriendsList';
import userFriensdList from '../data/friends.json';
import { TransactionHistory } from '../components/transactions/TransactionsList';
import userTransactions from '../data/transactions.json';

export const App = () => {
  return (
    <div style={{ backgroundColor: '#dddddd' }}>
      <User
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Stats title="Upload stats" userStats={userStatistics} />
      <FriendList userFriends={userFriensdList} />
      <TransactionHistory userTransact={userTransactions} />
    </div>
  );
};
