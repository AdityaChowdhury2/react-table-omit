import PropTypes from 'prop-types';
import './Table.css';
const Table = ({ columns, data }) => {
	return (
		<div className="overflow-auto">
			{/* Table Started */}
			<div
				className={`custom-table border-[1px] border-black rounded-md mt-5 ${
					columns.length > 3 ? 'min-w-[800px]' : 'min-w-[400px]'
				} min-w-[800px] `}
			>
				{/* Table Head */}
				<div
					className={`grid font-bold *:border-black *:border-r-[1px] *:border-b-[1px]`}
					style={{
						gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
					}}
				>
					{columns.length ? (
						columns.map((column, index) => (
							<div
								key={index}
								className="table-header capitalize last:border-r-0"
							>
								{column.name}
							</div>
						))
					) : (
						<div className="text-center">No columns Selected</div>
					)}
				</div>
				{/* Table Body */}
				<div className="table-body">
					{/* Table Row */}
					{data.map(item => (
						<div
							key={item.id}
							className="grid *:border-black *:border-r-[1px]"
							style={{
								gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
							}}
						>
							{/* Table Data */}
							{columns.map((column, index) => (
								<div key={index} className="table-data last:border-r-0">
									{item[column.name]}
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

Table.propTypes = {
	columns: PropTypes.array.isRequired,
	data: PropTypes.array.isRequired,
};

export default Table;
