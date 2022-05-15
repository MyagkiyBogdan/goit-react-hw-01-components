import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  const onlineClasses = [styles.status];

  isOnline
    ? onlineClasses.push(styles.statusOnline)
    : onlineClasses.push(styles.statusOffline);

  return (
    <li className={styles.item}>
      <span className={onlineClasses.join(' ')}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}
export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
