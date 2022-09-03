import PropTypes from 'prop-types';

import './transactionHistory.css';

const TransactionHistory = ({ items }) => {
	return (
		<table className="transaction-history">
			<thead>
				<tr>
					<th>
						<span className="transaction-history__type">TYPE</span>
					</th>
					<th>AMOUNT</th>
					<th>CURRENCY</th>
				</tr>
			</thead>
			<tbody>
				{items.map(({ id, type, amount, currency }) => {
					return (
						<tr className="transaction-history__item" key={id}>
							<td>
								<span className="transaction-history__item_type">
									{type}
								</span>
							</td>
							<td>
								<span className="transaction-history__item_amount">
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
	items: PropTypes.array.isRequired,
};
