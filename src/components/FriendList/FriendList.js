import s from './FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => (
  <ul className={s.friendList}>
    {friends.map(el => (
      <li key={el.id} className={s.item}>
        <FriendListItem
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
        />
      </li>
    ))}
  </ul>
);

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
