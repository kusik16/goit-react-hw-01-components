import Profile from '../profile/Profile';
import Statistics from '../statistics/Statistics';
import FriendList from '../friendList/FriendList';
import TransactionHistory from '../transactionHistory/TransactionHistory';

import user from '../../user.json';
import statistics from '../../statistics.json';
import friends from '../../friends.json';
import items from '../../transactions.json';

export const App = () => {
	return (
		<>
			<Profile
				username={user.username}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats}
			/>
			<Statistics stats={statistics} />
			<FriendList friends={friends} />
			<TransactionHistory items={items} />
		</>
	);
};
