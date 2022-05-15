import Profile from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import FriendListItem from './FriendList/FriendListItem';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </>
      <FriendList friends={friends}>
        {/* Вариант без жесткой привзяки FriendListItem к FriendList с использованием children. Альтернативный вариант с прокидываением пропсов находится в компоненте FriendList. */}

        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </FriendList>
      <TransactionHistory items={transactions} />
    </div>
  );
};
