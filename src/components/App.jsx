import { User } from '../components/Profile/Profile';
import userData from '../data/user.json';
import { Stats } from '../components/Statistics/Statistics';
import userStatistics from '../data/data.json';
import { FriendList } from '../components/FriendsList/FriendsList';
import userFriensdList from '../data/friends.json';
import { TransactionHistory } from '../components/TransactionsList/TransactionsList';
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
