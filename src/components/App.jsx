import { User } from '../components/profile/Profile';
import userData from '../components/profile/user.json';
import { Stats } from '../components/statics/Statistics';
import userStatistics from '../components/statics/data.json';
import { FriendList } from '../components/friend/Friends_list';
import userFriensdList from '../components/friend/friends.json';
import { TransactionHistory } from '../components/transactions/Transactions_list';
import userTransactions from '../components/transactions/transactions.json';

export const App = () => {
  return (
    <div>
      <User userProfile={userData} />
      <Stats userStats={userStatistics} title="Upload stats" />
      <FriendList userFriends={userFriensdList} />
      <TransactionHistory userTransact={userTransactions} />
    </div>
  );
};
