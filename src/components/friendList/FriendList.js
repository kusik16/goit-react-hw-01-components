import FriendListItem from 'components/friendListItem/FriendListItem';
import PropTypes from 'prop-types';

import friendList from './FriendList.module.css';

const FriendList = ({ friends }) => {
	return (
		<ul className={friendList.list}>
			{friends.map(({ avatar, name, isOnline, id }) => {
				return (
					<FriendListItem
						key={id}
						avatar={avatar}
						name={name}
						isOnline={isOnline}
						id={id}
					/>
				);
			})}
		</ul>
	);
};

export default FriendList;

FriendList.propTypes = {
	friends: PropTypes.array.isRequired,
};
