import PropTypes from 'prop-types';

import './statistics.css';

const getDarkColor = () => {
	var color = '#';
	for (let i = 0; i < 6; i++) {
		color += Math.floor(Math.random() * 10);
	}
	return color;
};

const Statistics = ({ title, stats }) => {
	return (
		<section className="statistics">
			{title ? <h2 className="statistics__title">{title}</h2> : null}

			<ul className="statistics__list">
				{stats.map(stat => {
					return (
						<li
							key={stat.id}
							style={{ backgroundColor: getDarkColor() }}
							className="statistics__list_item"
						>
							<span className="statistics__list_item-label">
								{stat.label}
							</span>
							<span className="statistics__list_item-percentage">
								{stat.percentage}%
							</span>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Statistics;

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.array.isRequired,
};
