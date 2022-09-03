import FriendListItem from 'components/friendListItem/FriendListItem';
import PropTypes from 'prop-types';

import './friendList.css';

const FriendList = ({ friends }) => {
	return (
		<ul className="friend-list">
			{friends.map(({ avatar, name, isOnline, id }) => {
				return (
					<FriendListItem
						key={id}
						avatar={avatar}
						name={name}
						isOnline={isOnline}
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
