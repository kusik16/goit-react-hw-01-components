import PropTypes from 'prop-types';
import './profile.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
	const { followers, views, likes } = stats;
	return (
		<div className="profile">
			<div className="description">
				<img src={avatar} alt="User avatar" className="avatar" />
				<p className="name">{username}</p>
				<p className="tag">{tag}</p>
				<p className="location">{location}</p>
			</div>

			<ul className="stats">
				<li className="stats__item">
					<span className="stats__item-label">Followers</span>
					<span className="stats__item-quantity">{followers}</span>
				</li>
				<li className="stats__item">
					<span className="stats__item-label">Views</span>
					<span className="stats__item-quantity">{views}</span>
				</li>
				<li className="stats__item">
					<span className="stats__item-label">Likes</span>
					<span className="stats__item-quantity">{likes}</span>
				</li>
			</ul>
		</div>
	);
};

export default Profile;

Profile.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	stats: PropTypes.object.isRequired,
};
