import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';
function FriendList({ friends, children }) {
  // Переменная friends и импорт нужны для альтернативного варианта function FriendList({ friends, children }) {

  return (
    <ul className={styles.friendList}>
      {children}

      {/* Альтернативный вариант с передачей прокидываением пропсов для FriendListItem через FriendList */}

      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
