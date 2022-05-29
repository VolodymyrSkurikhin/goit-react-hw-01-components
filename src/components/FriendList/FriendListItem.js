import s from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <>
    <span
      className={isOnline ? (s.status, s.statusOn) : (s.status, s.statusOff)}
    ></span>
    <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={s.name}>{name}</p>
  </>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
