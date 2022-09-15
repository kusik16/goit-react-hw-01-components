import PropTypes from 'prop-types';

import friendListItem from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
	return (
		<li className={friendListItem.item}>
			<span
				className={
					isOnline
						? `${friendListItem.status} ${friendListItem.online}`
						: friendListItem.status
				}
			></span>
			<img
				className={friendListItem.avatar}
				src={avatar}
				alt="User avatar"
			/>
			<p className={friendListItem.name}>{name}</p>
		</li>
	);
};

export default FriendListItem;

FriendListItem.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
	id: PropTypes.number.isRequired,
};
