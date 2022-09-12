import PropTypes from 'prop-types';

import statistics from './Statistics.module.css';

const getDarkColor = () => {
	var color = '#';
	for (let i = 0; i < 6; i++) {
		color += Math.floor(Math.random() * 10);
	}
	return color;
};

const Statistics = ({ title, stats }) => {
	return (
		<section className={statistics.container}>
			{title && <h2 className={statistics.title}>{title}</h2>}

			<ul className={statistics.list}>
				{stats.map(({ id, label, percentage }) => {
					return (
						<li
							key={id}
							style={{ backgroundColor: getDarkColor() }}
							className={statistics.item}
						>
							<span className={statistics.label}>{label}</span>
							<span className={statistics.percentage}>
								{percentage}%
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
	stats: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
				.isRequired,
			label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
				.isRequired,
			percentage: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.number,
			]).isRequired,
		})
	),
};
