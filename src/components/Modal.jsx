import PropTypes from 'prop-types';
import { useRef } from 'react';
import useClickOutside from '../hooks/useClickOutside';
const Modal = ({ columns, selected, handleSelect, closeModal }) => {
	const modalRef = useRef(null);

	// Close the modal when the user clicks outside of it
	useClickOutside({
		ref: modalRef,
		callback: closeModal,
	});

	return (
		<div
			ref={modalRef}
			className="absolute top-10 right-10 bg-slate-100 rounded-lg"
		>
			<h3 className="font-bold text-xs text-center mt-3 pb-2 border-b-[1px] border-black">
				Add or Remove
			</h3>
			<ul className=" p-3 space-y-3">
				{/* Loop through the columns and create a checkbox for each one */}
				{columns.map((column, index) => (
					<li key={index} className="capitalize px-3">
						<label className="block cursor-pointer">
							<input
								type="checkbox"
								className="mr-2 px-2"
								// the checkbox is checked, if the column name is in the selected state
								checked={selected.some(item => item.name === column.name)}
								value={column.name}
								onChange={handleSelect}
							/>
							{column.name}
						</label>
					</li>
				))}
			</ul>
		</div>
	);
};

Modal.propTypes = {
	columns: PropTypes.array.isRequired,
	selected: PropTypes.array.isRequired,
	handleSelect: PropTypes.func.isRequired,
	closeModal: PropTypes.func.isRequired,
};

export default Modal;
