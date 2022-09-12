import PropTypes from 'prop-types';

import transactionHistory from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
	return (
		<table className={transactionHistory.container}>
			<thead>
				<tr>
					<th>
						<span>TYPE</span>
					</th>
					<th>AMOUNT</th>
					<th>CURRENCY</th>
				</tr>
			</thead>
			<tbody>
				{items.map(({ id, type, amount, currency }) => {
					return (
						<tr className={transactionHistory.item} key={id}>
							<td>
								<span className={transactionHistory.itemType}>
									{type}
								</span>
							</td>
							<td>
								<span className={transactionHistory.itemAmount}>
									{amount}
								</span>
							</td>
							<td>{currency}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default TransactionHistory;

TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
				.isRequired,
			type: PropTypes.string.isRequired,
			amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
				.isRequired,
			currency: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
				.isRequired,
		})
	),
};
