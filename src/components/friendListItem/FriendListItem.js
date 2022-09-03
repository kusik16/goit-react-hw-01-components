import PropTypes from 'prop-types';
import './friendListItem.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
	return (
		<li className="friend-list__item">
			<span
				className={
					isOnline
						? 'friend-list__item_status online'
						: 'friend-list__item_status'
				}
			></span>
			<img
				className="friend-list__item_avatar"
				src={avatar}
				alt="User avatar"
			/>
			<p className="friend-list__item_name">{name}</p>
		</li>
	);
};

export default FriendListItem;

FriendListItem.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
};
